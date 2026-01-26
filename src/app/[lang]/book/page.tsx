import { notFound } from "next/navigation";
import path from "node:path";
import fs from "node:fs/promises";

import { BookingWidget } from "@/components/BookingWidget";
import { RandomPeopleStack } from "@/components/RandomPeopleStack";
import { Container } from "@/components/blocks/Container";
import { getMessages, hasLocale } from "@/i18n/messages";

async function getPeopleImages() {
  try {
    const dir = path.join(process.cwd(), "public", "images", "people");
    const files = await fs.readdir(dir);
    const images = files
      .filter((f) => /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(f))
      .sort((a, b) => a.localeCompare(b));
    return images.map((f) => `/images/people/${f}`);
  } catch {
    return [];
  }
}

export default async function BookPage({ params }: PageProps<"/[lang]/book">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getMessages(lang);
  const people = await getPeopleImages();

  return (
    <main className="h-svh overflow-hidden pt-20">
      <Container className="max-w-xl sm:max-w-2xl h-full flex flex-col">
        <div className="flex flex-col items-center text-center">
          {/* Randomize which people show on each refresh */}
          <RandomPeopleStack srcs={people} alt="Team" />
          <h1 className="mt-6 text-4xl font-light tracking-[-0.04em] text-black sm:text-5xl">
            {m.pages.book.title}
          </h1>
          <p className="mt-4 text-base leading-8 font-light text-zinc-600 sm:text-lg">
            {m.pages.book.description}
          </p>
        </div>

        <div className="mt-6 flex-1 min-h-0">
          <BookingWidget
            lang={lang}
            strings={{
              timeNeeded: m.pages.book.widget.timeNeeded,
              minutes30: m.pages.book.widget.minutes30,
              minutes60: m.pages.book.widget.minutes60,
              dateLabel: m.pages.book.widget.dateLabel,
              prevDay: m.pages.book.widget.prevDay,
              nextDay: m.pages.book.widget.nextDay,
              openCalendar: m.pages.book.widget.openCalendar,
              pickATime: m.pages.book.widget.pickATime,
              loading: m.pages.book.widget.loading,
              noTimes: m.pages.book.widget.noTimes,
              pickTimeFirst: m.pages.book.widget.pickTimeFirst,
              yourDetails: m.pages.book.widget.yourDetails,
              firstName: m.pages.book.widget.firstName,
              lastName: m.pages.book.widget.lastName,
              company: m.pages.book.widget.company,
              email: m.pages.book.widget.email,
              back: m.pages.book.widget.back,
              continue: m.pages.book.widget.continue,
              book: m.pages.book.widget.book,
              booking: m.pages.book.widget.booking,
              bookedTitle: m.pages.book.widget.bookedTitle,
              bookedBody: m.pages.book.widget.bookedBody,
              errorTitle: m.pages.book.widget.errorTitle,
              tryAgain: m.pages.book.widget.tryAgain,
            }}
          />
        </div>
      </Container>
    </main>
  );
}

