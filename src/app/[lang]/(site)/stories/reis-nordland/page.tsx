import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/components/blocks/CaseStudyPage";
import { getMessages, hasLocale } from "@/i18n/messages";

export function generateStaticParams() {
  return [{ lang: "en" }];
}

export default async function ReisNordlandCaseStudyPage({
  params,
}: PageProps<"/[lang]/stories/reis-nordland">) {
  const { lang } = await params;
  if (!hasLocale(lang) || lang !== "en") notFound();

  const m = getMessages(lang);
  const content = m.pages.caseStudies.reisNordland;
  const labels = m.pages.caseStudies.common;

  return (
    <CaseStudyPage
      lang={lang}
      content={content}
      labels={labels}
      backHref={`/${lang}/stories`}
    />
  );
}
