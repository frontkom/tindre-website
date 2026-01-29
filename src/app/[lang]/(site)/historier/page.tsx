import { notFound } from "next/navigation";

import { CaseStudies } from "@/components/blocks/CaseStudies";
import { Container } from "@/components/blocks/Container";
import { getMessages, hasLocale } from "@/i18n/messages";

export function generateStaticParams() {
  return [{ lang: "no" }];
}

export default async function HistorierPage({
  params,
}: PageProps<"/[lang]/historier">) {
  const { lang } = await params;
  if (!hasLocale(lang) || lang !== "no") notFound();

  const m = getMessages(lang);
  const caseStudies = m.pages.caseStudies;

  const homeCaseStudies = m.home.caseStudies.items;

  const items = [
    {
      kicker: "Offentlig sektor",
      title: caseStudies.reisNordland.title,
      description: caseStudies.reisNordland.intro,
      imageSrc: caseStudies.reisNordland.imageSrc,
      imageAlt: caseStudies.reisNordland.imageAlt,
      quote: caseStudies.reisNordland.quote?.text,
      quoteSource: caseStudies.reisNordland.quote
        ? { org: caseStudies.reisNordland.quote.source, logoSrc: "/images/logos/nfk.svg" }
        : undefined,
      metrics: caseStudies.reisNordland.metrics,
      cta: {
        label: "Les kundehistorie",
        href: "/historier/reis-nordland",
      },
    },
    {
      kicker: "Telekom",
      title: caseStudies.plussmobil.title,
      description: caseStudies.plussmobil.intro,
      imageSrc: caseStudies.plussmobil.imageSrc,
      imageAlt: caseStudies.plussmobil.imageAlt,
      quote: caseStudies.plussmobil.quote?.text,
      quoteSource: caseStudies.plussmobil.quote
        ? { org: caseStudies.plussmobil.quote.source }
        : undefined,
      metrics: caseStudies.plussmobil.metrics,
      cta: {
        label: "Les kundehistorie",
        href: "/historier/plussmobil",
      },
    },
    // Akademika from home page case studies
    {
      ...homeCaseStudies[1],
      cta: undefined, // No detail page yet
    },
  ];

  return (
    <main className="min-h-screen">
      <Container className="pt-32 pb-8">
        <h1 className="text-4xl font-light tracking-[0.08em] text-black sm:text-5xl">
          {m.pages.references.title}
        </h1>
      </Container>
      <CaseStudies
        lang={lang}
        title=""
        items={items}
      />
    </main>
  );
}
