import Image from "next/image";
import Link from "next/link";

import { BookDemoButton } from "@/components/BookDemoButton";
import { getMessages, type Locale } from "@/i18n/messages";

// TODO(nav): Re-enable header navigation (desktop + mobile) when ready.

type SiteHeaderProps = {
  lang: Locale;
  demoUrl?: string;
};

const HUBSPOT_MEETING_URL = "https://meetings.hubspot.com/sverre-oeie/tindreintroduction";

export function SiteHeader({ lang, demoUrl }: SiteHeaderProps) {
  const m = getMessages(lang);
  const demoHref = demoUrl ?? HUBSPOT_MEETING_URL;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          <Link
            href={`/${lang}#top`}
            className="flex items-center text-black md:justify-self-start"
          >
            <Image
              src="/images/logos/logo.png"
              alt="Tindre"
              width={120}
              height={40}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center justify-end gap-3">
            <BookDemoButton href={demoHref} size="sm" withArrow>
              {m.cta.bookDemo}
            </BookDemoButton>
          </div>
        </div>
      </div>
    </header>
  );
}
