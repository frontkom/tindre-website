import Link from "next/link";

import { LanguagePicker } from "@/components/LanguagePicker";
import { getMessages, type Locale } from "@/i18n/messages";

type SiteFooterProps = {
  lang: Locale;
};

export function SiteFooter({ lang }: SiteFooterProps) {
  const m = getMessages(lang);

  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-start">
          <div className="flex flex-col gap-6">
            <Link href={`/${lang}#top`} className="leading-none text-black">
              <div className="text-[30px] font-medium tracking-[-0.04em]">Tindre</div>
              <div className="mt-1 text-[12px] font-medium tracking-tight text-black/70">
                By Frontkom
              </div>
            </Link>
            {/* TODO(nav): Re-enable footer navigation when ready. */}
          </div>

          <div className="sm:justify-self-end">
            <LanguagePicker
              value={lang}
              label={m.footer.language}
              labels={{ no: m.language.no, en: m.language.en }}
            />
          </div>
        </div>

        <p className="mt-10 text-center text-xs font-light tracking-[0.12em] text-zinc-400">
          © 2026 Tindre. {m.footer.rightsReserved}
        </p>
      </div>
    </footer>
  );
}
