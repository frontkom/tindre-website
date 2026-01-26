import { NextResponse } from "next/server";

export const runtime = "nodejs";

const HUBSPOT_BASE_URL = "https://api.hubapi.com";
const MEETING_SLUG = "henrik-akselsen";

function getToken() {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) {
    throw new Error("Missing HUBSPOT_PRIVATE_APP_TOKEN env var.");
  }
  return token;
}

function jsonError(message: string, status = 500) {
  return NextResponse.json({ error: message }, { status });
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const timezone = searchParams.get("timezone") ?? "Europe/Oslo";
    const monthOffsetRaw = searchParams.get("monthOffset") ?? "0";
    const monthOffset = Number(monthOffsetRaw);
    if (!Number.isFinite(monthOffset) || monthOffset < 0 || monthOffset > 24) {
      return jsonError("Invalid monthOffset", 400);
    }

    const token = getToken();
    const url = new URL(`${HUBSPOT_BASE_URL}/scheduler/v3/meetings/meeting-links/book/${MEETING_SLUG}`);
    url.searchParams.set("timezone", timezone);
    url.searchParams.set("monthOffset", String(monthOffset));

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      return NextResponse.json(
        { error: "HubSpot request failed", status: res.status, details: data },
        { status: 502 },
      );
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    return jsonError(err instanceof Error ? err.message : "Unknown error");
  }
}

type BookBody = {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  startTime: number; // millis utc
  duration: number; // millis
  timezone?: string;
  guestEmails?: string[];
  locale?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BookBody>;

    const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
    const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const startTime = typeof body.startTime === "number" ? body.startTime : NaN;
    const duration = typeof body.duration === "number" ? body.duration : NaN;
    const timezone = typeof body.timezone === "string" && body.timezone ? body.timezone : "Europe/Oslo";
    const guestEmails = Array.isArray(body.guestEmails) ? body.guestEmails.filter((e) => typeof e === "string") : [];
    const locale = typeof body.locale === "string" ? body.locale : "en-us";

    if (!firstName || !lastName || !email) return jsonError("Missing name or email", 400);
    if (!Number.isFinite(startTime) || startTime <= 0) return jsonError("Invalid startTime", 400);
    if (!Number.isFinite(duration) || duration <= 0) return jsonError("Invalid duration", 400);

    const token = getToken();
    const url = new URL(`${HUBSPOT_BASE_URL}/scheduler/v3/meetings/meeting-links/book`);
    url.searchParams.set("timezone", timezone);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        slug: MEETING_SLUG,
        firstName,
        lastName,
        email,
        startTime,
        duration,
        guestEmails,
        timezone,
        locale,
        ...(company
          ? {
              formFields: [
                {
                  name: "company",
                  value: company,
                },
              ],
            }
          : null),
        likelyAvailableUserIds: [],
      }),
      cache: "no-store",
    });

    const data = await res.json().catch(() => null);
    if (!res.ok) {
      return NextResponse.json(
        { error: "HubSpot booking failed", status: res.status, details: data },
        { status: 502 },
      );
    }

    // Best-effort: update the linked contact with company name.
    // Requires the token to include `crm.objects.contacts.write`.
    if (company && data && typeof (data as any).contactId === "string") {
      const contactId = (data as any).contactId as string;
      try {
        const updateUrl = new URL(`${HUBSPOT_BASE_URL}/crm/v3/objects/contacts/${contactId}`);
        await fetch(updateUrl, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            properties: {
              company,
            },
          }),
          cache: "no-store",
        });
      } catch {
        // Ignore contact update errors; booking succeeded.
      }
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    return jsonError(err instanceof Error ? err.message : "Unknown error");
  }
}

