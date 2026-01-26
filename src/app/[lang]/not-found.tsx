"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { getMessages } from "@/i18n/messages";

export default function NotFound() {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang === "en" ? "en" : "no";
  const m = getMessages(lang);

  return (
    <main className="min-h-screen pt-32">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-10 lg:px-16">
        <h1 className="text-4xl font-light tracking-[0.08em] text-black sm:text-5xl">
          404
        </h1>
        <p className="mt-4 text-base leading-8 font-light text-zinc-600 sm:text-lg">
          {m.notFound.message}
        </p>

        <div className="mt-8">
          <Link
            href={`/${lang}`}
            className="text-sm font-semibold tracking-tight text-black underline underline-offset-4"
          >
            {m.notFound.backToHome}
          </Link>
        </div>
      </div>
    </main>
  );
}

