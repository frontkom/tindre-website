"use client";

import * as React from "react";

import { CaretLeft, CaretRight, CalendarBlank } from "@phosphor-icons/react";
import { DayPicker } from "react-day-picker";

import { Button } from "@/components/Button";

type Availability = { startMillisUtc: number; endMillisUtc: number };

type BookingInfoResponse = {
  linkAvailability?: {
    linkAvailabilityByDuration?: Record<
      string,
      { meetingDurationMillis: number; availabilities: Availability[] }
    >;
    hasMore?: boolean;
  };
};

type BookingWidgetStrings = {
  timeNeeded: string;
  minutes30: string;
  minutes60: string;
  dateLabel: string;
  prevDay: string;
  nextDay: string;
  openCalendar: string;
  pickATime: string;
  loading: string;
  noTimes: string;
  pickTimeFirst: string;
  yourDetails: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  back: string;
  continue: string;
  book: string;
  booking: string;
  bookedTitle: string;
  bookedBody: string;
  errorTitle: string;
  tryAgain: string;
};

function formatDayLabel(date: Date, locale: string, timeZone: string) {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "short",
    day: "numeric",
    timeZone,
  }).format(date);
}

function formatTimeLabel(date: Date, locale: string, timeZone: string) {
  return new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  }).format(date);
}

function getDayKey(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone,
  }).format(date);
}

function parseDayKeyToLocalDate(dayKey: string) {
  const [y, m, d] = dayKey.split("-").map((v) => Number(v));
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

function monthDiffFromNow(date: Date) {
  const now = new Date();
  return (date.getFullYear() - now.getFullYear()) * 12 + (date.getMonth() - now.getMonth());
}

function uniqueSortedDayKeys(availabilities: Availability[], timeZone: string) {
  const keys = new Set<string>();
  for (const a of availabilities) keys.add(getDayKey(new Date(a.startMillisUtc), timeZone));
  return [...keys].sort();
}

function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse bg-zinc-100/80 motion-reduce:animate-none ${className}`} />;
}

export function BookingWidget({
  lang,
  strings,
}: {
  lang: "no" | "en";
  strings: BookingWidgetStrings;
}) {
  const locale = lang === "no" ? "nb-NO" : "en-US";
  const [timezone, setTimezone] = React.useState("Europe/Oslo");
  const [monthOffset, setMonthOffset] = React.useState(0);
  const [reloadKey, setReloadKey] = React.useState(0);

  const [data, setData] = React.useState<BookingInfoResponse | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const [duration, setDuration] = React.useState<number | null>(null);
  const [selectedDayKey, setSelectedDayKey] = React.useState<string | null>(null);
  const [selectedStart, setSelectedStart] = React.useState<number | null>(null);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [booking, setBooking] = React.useState(false);
  const [booked, setBooked] = React.useState(false);

  const [step, setStep] = React.useState<"pick" | "details">("pick");
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  const calendarRef = React.useRef<HTMLDivElement | null>(null);
  const timeListRef = React.useRef<HTMLDivElement | null>(null);
  const [showTimeTopFade, setShowTimeTopFade] = React.useState(false);
  const [showTimeBottomFade, setShowTimeBottomFade] = React.useState(false);

  React.useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) setTimezone(tz);
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      setError(null);
      setBooked(false);
      setSelectedStart(null);
      setStep("pick");

      try {
        const url = new URL("/api/meetings/henrik", window.location.origin);
        url.searchParams.set("timezone", timezone);
        url.searchParams.set("monthOffset", String(monthOffset));

        const res = await fetch(url, { cache: "no-store" });
        const json = (await res.json()) as { error?: string } & BookingInfoResponse;
        if (!res.ok) throw new Error(json.error ?? "Failed to load availability");
        if (cancelled) return;

        setData(json);

        const durations = Object.values(json.linkAvailability?.linkAvailabilityByDuration ?? {})
          .map((x) => x.meetingDurationMillis)
          .sort((a, b) => a - b);
        const preferred =
          durations.includes(30 * 60_000) ? 30 * 60_000 : durations.includes(60 * 60_000) ? 60 * 60_000 : durations[0];
        setDuration((prev) => (prev && durations.includes(prev) ? prev : preferred ?? null));
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, [timezone, monthOffset, reloadKey]);

  const availabilityByDuration = data?.linkAvailability?.linkAvailabilityByDuration ?? {};
  const has30m = React.useMemo(() => Boolean(availabilityByDuration[String(30 * 60_000)]), [availabilityByDuration]);
  const has60m = React.useMemo(() => Boolean(availabilityByDuration[String(60 * 60_000)]), [availabilityByDuration]);

  const currentAvailabilities: Availability[] = React.useMemo(() => {
    if (!duration) return [];
    const entry = availabilityByDuration[String(duration)];
    return entry?.availabilities ?? [];
  }, [availabilityByDuration, duration]);

  React.useEffect(() => {
    setSelectedStart(null);
    setStep("pick");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  const availableDayKeys = React.useMemo(() => uniqueSortedDayKeys(currentAvailabilities, timezone), [currentAvailabilities, timezone]);
  const availableDayKeySet = React.useMemo(() => new Set(availableDayKeys), [availableDayKeys]);

  React.useEffect(() => {
    if (loading) return;
    if (availableDayKeys.length === 0) {
      setSelectedDayKey(null);
      return;
    }

    const todayKey = getDayKey(new Date(), timezone);
    const nextOrFirst = availableDayKeys.find((k) => k >= todayKey) ?? availableDayKeys[0]!;
    setSelectedDayKey((prev) => (prev && availableDayKeySet.has(prev) ? prev : nextOrFirst));
  }, [availableDayKeys, availableDayKeySet, loading, timezone]);

  const selectedDate = React.useMemo(
    () => (selectedDayKey ? parseDayKeyToLocalDate(selectedDayKey) : undefined),
    [selectedDayKey],
  );

  const calendarMonth = React.useMemo(() => {
    const base = new Date();
    base.setDate(1);
    base.setHours(0, 0, 0, 0);
    base.setMonth(base.getMonth() + monthOffset);
    return base;
  }, [monthOffset]);

  React.useEffect(() => {
    if (!selectedDate) return;
    const desired = Math.max(0, monthDiffFromNow(selectedDate));
    if (desired !== monthOffset) setMonthOffset(desired);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const selectedDayAvailabilities = React.useMemo(() => {
    if (!selectedDayKey) return [];
    return currentAvailabilities
      .filter((a) => getDayKey(new Date(a.startMillisUtc), timezone) === selectedDayKey)
      .sort((x, y) => x.startMillisUtc - y.startMillisUtc);
  }, [currentAvailabilities, selectedDayKey, timezone]);

  const selectedStartDate = selectedStart ? new Date(selectedStart) : null;

  const updateTimeFade = React.useCallback(() => {
    const el = timeListRef.current;
    if (!el) return;

    const canScroll = el.scrollHeight > el.clientHeight + 1;
    if (!canScroll) {
      setShowTimeTopFade(false);
      setShowTimeBottomFade(false);
      return;
    }

    const atTop = el.scrollTop <= 1;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    setShowTimeTopFade(!atTop);
    setShowTimeBottomFade(!atBottom);
  }, []);

  async function onBook() {
    if (!duration || !selectedStart) return;
    setBooking(true);
    setError(null);
    setBooked(false);
    try {
      const res = await fetch("/api/meetings/henrik", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          company,
          email,
          startTime: selectedStart,
          duration,
          timezone,
          locale: lang === "no" ? "nb-no" : "en-us",
        }),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "Booking failed");
      setBooked(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setBooking(false);
    }
  }

  React.useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!calendarOpen) return;
      const target = e.target as Node | null;
      if (!target) return;
      if (calendarRef.current && !calendarRef.current.contains(target)) {
        setCalendarOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setCalendarOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [calendarOpen]);

  function goPrevDay() {
    if (!selectedDayKey) return;
    const idx = availableDayKeys.indexOf(selectedDayKey);
    const prev = idx > 0 ? availableDayKeys[idx - 1] : null;
    if (prev) {
      setSelectedStart(null);
      setStep("pick");
      setSelectedDayKey(prev);
      return;
    }
  }

  function goNextDay() {
    if (!selectedDayKey) return;
    const idx = availableDayKeys.indexOf(selectedDayKey);
    const next = idx >= 0 && idx < availableDayKeys.length - 1 ? availableDayKeys[idx + 1] : null;
    if (next) {
      setSelectedStart(null);
      setStep("pick");
      setSelectedDayKey(next);
      return;
    }
  }

  React.useEffect(() => {
    const el = timeListRef.current;
    if (!el) return;
    el.scrollTop = 0;
    updateTimeFade();
  }, [selectedDayKey, selectedDayAvailabilities.length, updateTimeFade]);

  const selectedSummary = selectedStartDate
    ? `${formatDayLabel(selectedStartDate, locale, timezone)} ${formatTimeLabel(selectedStartDate, locale, timezone)}`
    : "";
  const durationSummary = duration ? `${Math.round(duration / 60000)} min` : "";

  return (
    <div className="h-full border border-black/10 bg-white p-4 sm:h-[500px] sm:p-5">
      {step === "pick" ? (
        <div className="flex h-full flex-col">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex flex-1 items-end justify-between gap-3" aria-busy={loading}>
              <button
                type="button"
                aria-label={strings.prevDay}
                onClick={goPrevDay}
                disabled={loading || booking || !selectedDayKey || availableDayKeys.indexOf(selectedDayKey) <= 0}
                className="grid size-10 cursor-pointer place-items-center border border-black/10 bg-white text-black hover:border-black/30 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
              >
                <CaretLeft aria-hidden="true" className="size-4" />
              </button>

              <div className="relative flex-1" ref={calendarRef}>
                <div className="text-[11px] font-semibold tracking-tight text-black/60">{strings.dateLabel}</div>
                {loading && !data ? (
                  <div className="mt-1 flex h-10 w-full items-center justify-between border border-black/10 bg-white px-3">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-4" />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCalendarOpen((v) => !v)}
                    className="mt-1 flex h-10 w-full cursor-pointer items-center justify-between border border-black/10 bg-white px-3 text-sm font-semibold tracking-tight text-black hover:border-black/30 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                    aria-label={strings.openCalendar}
                  >
                    <span className="truncate">
                      {selectedDate ? formatDayLabel(selectedDate, locale, timezone) : strings.loading}
                    </span>
                    <CalendarBlank aria-hidden="true" className="size-4 opacity-60" />
                  </button>
                )}

                {calendarOpen ? (
                  <div className="absolute left-0 top-[calc(100%+10px)] z-20 w-[340px] max-w-[calc(100vw-3rem)] border border-black/10 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:w-[380px]">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={(d) => {
                        if (!d) return;
                        const dk = getDayKey(d, timezone);
                        if (!availableDayKeySet.has(dk)) return;
                        setSelectedStart(null);
                        setStep("pick");
                        setSelectedDayKey(dk);
                        setCalendarOpen(false);
                      }}
                      month={calendarMonth}
                      onMonthChange={(m) => {
                        setMonthOffset(Math.max(0, monthDiffFromNow(m)));
                      }}
                      disabled={(d) => {
                        const dk = getDayKey(d, timezone);
                        const todayKey = getDayKey(new Date(), timezone);
                        if (dk < todayKey) return true;
                        return !availableDayKeySet.has(dk);
                      }}
                      showOutsideDays
                      classNames={{
                        root: "text-sm",
                        months: "flex flex-col",
                        month: "w-full",
                        // Layout the nav (arrows) above the month label for clearer spacing.
                        month_caption: "flex flex-col items-center pb-3",
                        nav: "order-1 flex w-full items-center justify-between",
                        caption_label: "order-2 mt-3 text-sm font-semibold tracking-tight text-black",
                        button_previous:
                          "grid size-9 cursor-pointer place-items-center border border-black/10 bg-white hover:border-black/30 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                        button_next:
                          "grid size-9 cursor-pointer place-items-center border border-black/10 bg-white hover:border-black/30 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                        month_grid: "w-full",
                        weekdays: "grid grid-cols-7",
                        weekday: "h-8 grid place-items-center text-[11px] font-semibold text-black/50",
                        week: "grid grid-cols-7",
                        day: "grid place-items-center py-1",
                        day_button:
                          "grid size-9 cursor-pointer place-items-center border border-transparent text-sm font-semibold tracking-tight text-black hover:border-black/20 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                        selected:
                          "[&>button]:border-primary [&>button]:bg-primary [&>button]:text-white [&>button]:hover:border-primary [&>button]:hover:bg-primary",
                        disabled:
                          "[&>button]:cursor-not-allowed [&>button]:text-black/20 [&>button]:hover:border-transparent [&>button]:hover:bg-transparent",
                        today: "[&>button]:border-black/10 [&>button]:bg-zinc-50",
                        outside: "[&>button]:text-black/20",
                      }}
                      components={{
                        Chevron: ({ orientation, ...props }) => {
                          if (orientation === "left") {
                            return <CaretLeft aria-hidden="true" className="size-4" {...props} />;
                          }
                          if (orientation === "right") {
                            return <CaretRight aria-hidden="true" className="size-4" {...props} />;
                          }
                          return <CalendarBlank aria-hidden="true" className="size-4" {...props} />;
                        },
                      }}
                    />
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                aria-label={strings.nextDay}
                onClick={goNextDay}
                disabled={
                  loading ||
                  booking ||
                  !selectedDayKey ||
                  availableDayKeys.indexOf(selectedDayKey) < 0 ||
                  availableDayKeys.indexOf(selectedDayKey) >= availableDayKeys.length - 1
                }
                className="grid size-10 cursor-pointer place-items-center border border-black/10 bg-white text-black hover:border-black/30 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
              >
                <CaretRight aria-hidden="true" className="size-4" />
              </button>
            </div>

            <div className="sm:pl-2">
              <div className="text-[11px] font-semibold tracking-tight text-black/60 sm:text-right">
                {strings.timeNeeded}
              </div>
              <div className="mt-2 inline-flex overflow-hidden border border-black/10 bg-white">
                <button
                  type="button"
                  onClick={() => setDuration(30 * 60_000)}
                  disabled={loading || booking || (!has30m && !!data)}
                  className={[
                    "h-10 cursor-pointer px-4 text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                    duration === 30 * 60_000
                      ? "bg-zinc-200 text-black"
                      : "bg-white text-black/70 hover:bg-zinc-50 hover:text-black",
                    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40",
                  ].join(" ")}
                >
                  {strings.minutes30}
                </button>
                <button
                  type="button"
                  onClick={() => setDuration(60 * 60_000)}
                  disabled={loading || booking || (!has60m && !!data)}
                  className={[
                    "h-10 cursor-pointer px-4 text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                    duration === 60 * 60_000
                      ? "bg-zinc-200 text-black"
                      : "bg-white text-black/70 hover:bg-zinc-50 hover:text-black",
                    "border-l border-black/10",
                    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40",
                  ].join(" ")}
                >
                  {strings.minutes60}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 flex min-h-0 flex-1 flex-col">
            <div className="text-sm font-semibold tracking-tight text-black">{strings.pickATime}</div>

            {loading && !data ? (
              <div className="relative mt-3 min-h-0 flex-1">
                <div className="h-full overflow-hidden pr-1">
                  <div className="flex h-full flex-col gap-2">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <div className="flex-1" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white to-transparent" />
              </div>
            ) : loading ? (
              <div className="mt-3 text-sm font-light text-zinc-600">{strings.loading}</div>
            ) : error ? (
              <div className="mt-3 border border-red-500/20 bg-red-50 p-4">
                <div className="text-sm font-semibold text-red-800">{strings.errorTitle}</div>
                <div className="mt-1 text-sm font-light text-red-800/90">{error}</div>
                <div className="mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-none"
                    onClick={() => setReloadKey((k) => k + 1)}
                    disabled={booking}
                  >
                    {strings.tryAgain}
                  </Button>
                </div>
              </div>
            ) : availableDayKeys.length === 0 ? (
              <div className="mt-3 text-sm font-light text-zinc-600">{strings.noTimes}</div>
            ) : selectedDayAvailabilities.length === 0 ? (
              <div className="mt-3 text-sm font-light text-zinc-600">{strings.noTimes}</div>
            ) : (
              <>
                <div className="relative mt-3 min-h-0 flex-1">
                  <div
                    ref={timeListRef}
                    onScroll={updateTimeFade}
                    className="h-full overflow-y-auto pr-1"
                  >
                    <div className="flex flex-col gap-2">
                      {selectedDayAvailabilities.map((a) => {
                        const isSelected = selectedStart === a.startMillisUtc;
                        const label = formatTimeLabel(new Date(a.startMillisUtc), locale, timezone);
                        return (
                          <button
                            key={a.startMillisUtc}
                            type="button"
                            onClick={() => {
                              setSelectedStart(a.startMillisUtc);
                            }}
                            className={[
                              "w-full cursor-pointer border-2 px-4 py-3 text-left text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
                              isSelected
                                ? "border-primary bg-primary text-white"
                                : "border-black/10 bg-white text-black hover:border-black/30 hover:bg-zinc-50",
                            ].join(" ")}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  {showTimeTopFade ? (
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-linear-to-b from-white to-transparent" />
                  ) : null}
                  {showTimeBottomFade ? (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white to-transparent" />
                  ) : null}
                </div>

                <div className="mt-4 flex justify-end">
                  <Button
                    onClick={() => setStep("details")}
                    className="transition-none"
                    disabled={!selectedStart || loading || booking}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>{strings.continue}</span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="size-4"
                        fill="none"
                      >
                        <path
                          d="M5.25 8h5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.75 5.75L10.75 8l-2 2.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col gap-5">
          <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-3">
            <button
              type="button"
              onClick={() => setStep("pick")}
              className="cursor-pointer text-sm font-semibold tracking-tight text-black/70 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              <span className="inline-flex items-center gap-2">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
                  <path
                    d="M10.75 8H5.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.25 5.75L5.25 8l2 2.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{strings.back}</span>
              </span>
            </button>

            <div className="text-right">
              <div className="text-xs font-semibold tracking-tight text-black/60">{durationSummary}</div>
              <div className="text-sm font-semibold tracking-tight text-black">{selectedSummary}</div>
            </div>
          </div>

          {booked ? (
            <div>
              <div className="text-sm font-semibold text-black">{strings.bookedTitle}</div>
              <div className="mt-1 text-sm font-light text-zinc-600">
                {strings.bookedBody}
              </div>
            </div>
          ) : (
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="text-sm font-semibold tracking-tight text-black">{strings.yourDetails}</div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold tracking-tight text-black/60">{strings.firstName}</span>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="h-10 border border-black/10 bg-white px-3 text-sm font-semibold tracking-tight text-black outline-none focus:ring-2 focus:ring-black/20"
                    disabled={booking}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold tracking-tight text-black/60">{strings.lastName}</span>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="h-10 border border-black/10 bg-white px-3 text-sm font-semibold tracking-tight text-black outline-none focus:ring-2 focus:ring-black/20"
                    disabled={booking}
                  />
                </label>
              </div>
              <label className="mt-3 flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-tight text-black/60">{strings.company}</span>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="h-10 border border-black/10 bg-white px-3 text-sm font-semibold tracking-tight text-black outline-none focus:ring-2 focus:ring-black/20"
                  disabled={booking}
                />
              </label>

              <label className="mt-3 flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-tight text-black/60">{strings.email}</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 border border-black/10 bg-white px-3 text-sm font-semibold tracking-tight text-black outline-none focus:ring-2 focus:ring-black/20"
                  disabled={booking}
                />
              </label>

              <div className="mt-auto flex justify-end pt-4">
                <Button
                  onClick={onBook}
                  withArrow
                  className="transition-none"
                  disabled={!selectedStart || !duration || !firstName || !lastName || !email || booking}
                >
                  {booking ? strings.booking : strings.book}
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

