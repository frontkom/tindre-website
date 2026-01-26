"use client";

import { usePathname, useRouter } from "next/navigation";

import type { Locale } from "@/i18n/messages";

type LanguagePickerProps = {
  value: Locale;
  label: string;
  labels: Record<Locale, string>;
};

function stripLocalePrefix(pathname: string) {
  if (pathname === "/no" || pathname.startsWith("/no/")) return pathname.slice(3) || "/";
  if (pathname === "/en" || pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}

function buildPathname(targetLocale: Locale, pathname: string) {
  const rest = stripLocalePrefix(pathname);
  return rest === "/" ? `/${targetLocale}` : `/${targetLocale}${rest}`;
}

export function LanguagePicker({ value, label, labels }: LanguagePickerProps) {
  const router = useRouter();
  const pathname = usePathname();

  function buildHref(targetLocale: Locale) {
    const nextPathname = buildPathname(targetLocale, pathname);
    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    return `${nextPathname}${search}${hash}`;
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold tracking-tight text-black">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            router.push(buildHref("no"), { scroll: false });
          }}
          className={
            value === "no"
              ? "text-sm font-semibold tracking-tight text-black underline underline-offset-4"
              : "text-sm font-semibold tracking-tight text-black/60 hover:text-black"
          }
        >
          {labels.no}
        </button>
        <span className="text-black/30">/</span>
        <button
          type="button"
          onClick={() => {
            router.push(buildHref("en"), { scroll: false });
          }}
          className={
            value === "en"
              ? "text-sm font-semibold tracking-tight text-black underline underline-offset-4"
              : "text-sm font-semibold tracking-tight text-black/60 hover:text-black"
          }
        >
          {labels.en}
        </button>
      </div>
    </div>
  );
}

