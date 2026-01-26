import { notFound } from "next/navigation";

import { Button } from "@/components/Button";
import { getMessages, hasLocale } from "@/i18n/messages";

export default async function BookLayout({ children, params }: LayoutProps<"/[lang]/book">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getMessages(lang);

  return (
    <div className="relative min-h-screen bg-white">
      <div className="absolute left-6 top-6 z-50">
        <Button href={`/${lang}`} variant="ghost" size="sm" className="transition-none">
          <span className="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="size-4"
              fill="none"
            >
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
            <span>{m.pages.book.backToHome}</span>
          </span>
        </Button>
      </div>
      {children}
    </div>
  );
}

