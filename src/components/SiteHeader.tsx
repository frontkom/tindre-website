import Link from "next/link";

import { Button } from "@/components/Button";
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
            className="flex flex-col leading-none text-black md:justify-self-start"
          >
            <span className="text-[30px] font-medium tracking-[-0.04em]">Tindre</span>
          </Link>

          <div className="flex items-center justify-end gap-3">
            <Button href={demoHref} size="sm" withArrow>
              {m.cta.bookDemo}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
