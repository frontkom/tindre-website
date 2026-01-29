import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/blocks/Container";
import type { Locale } from "@/i18n/messages";

type CaseStudyMetric = {
  value: number | string;
  kind?: string;
  label: string;
};

type CaseStudyQuote = {
  text: string;
  source: string;
};

export type CaseStudyContent = {
  title: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  customer: string;
  challenges: string[];
  solution: string[];
  technicalArchitecture?: string[];
  results: string[];
  quote?: CaseStudyQuote;
  successFactors: string[];
  metrics?: CaseStudyMetric[];
};

type CaseStudyLabels = {
  backToStories: string;
  customerTitle: string;
  challengesTitle: string;
  solutionTitle: string;
  resultsTitle: string;
  successFactorsTitle: string;
  technicalArchitectureTitle: string;
};

type CaseStudyPageProps = {
  lang: Locale;
  content: CaseStudyContent;
  labels: CaseStudyLabels;
  backHref: string;
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-light tracking-[0.04em] text-black sm:text-3xl">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-8 font-light text-zinc-600 sm:text-lg">
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="text-base leading-8 font-light text-zinc-600 sm:text-lg">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyPage({ lang, content, labels, backHref }: CaseStudyPageProps) {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container className="max-w-4xl">
        {/* Back link */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-black/50 hover:text-black mb-8"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4 rotate-180"
            fill="none"
          >
            <path
              d="M6.25 3.75h6v6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.25 3.75L3.75 12.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{labels.backToStories}</span>
        </Link>

        {/* Hero */}
        <h1 className="text-3xl font-light tracking-[0.06em] text-black sm:text-4xl lg:text-5xl">
          {content.title}
        </h1>
        <p className="mt-6 text-lg leading-8 font-light text-zinc-600 sm:text-xl">
          {content.intro}
        </p>

        {/* Hero image */}
        <div className="mt-10 relative w-full aspect-video border border-zinc-200 overflow-hidden">
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            width={1200}
            height={675}
            className="h-full w-full object-cover"
            priority
          />
          {content.metrics?.length ? (
            <div className="absolute inset-x-0 bottom-0 h-auto border-t border-white/10 bg-black/70 py-4 px-6">
              <div className="flex flex-wrap gap-8">
                {content.metrics.map((metric) => {
                  const isPercent = metric.kind === "percent";
                  const raw =
                    typeof metric.value === "number"
                      ? metric.value.toString()
                      : metric.value;
                  const value =
                    isPercent && typeof metric.value === "number"
                      ? `${metric.value > 0 ? "+" : ""}${metric.value}%`
                      : raw;

                  return (
                    <div key={metric.label} className="flex flex-col">
                      <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {value}
                      </div>
                      <div className="mt-1 text-xs font-medium tracking-tight text-white/75">
                        {metric.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        {/* Customer section */}
        <section className="mt-16">
          <SectionHeading>{labels.customerTitle}</SectionHeading>
          <div className="mt-4">
            <Paragraph>{content.customer}</Paragraph>
          </div>
        </section>

        {/* Challenges section */}
        <section className="mt-12">
          <SectionHeading>{labels.challengesTitle}</SectionHeading>
          <div className="mt-4">
            <BulletList items={content.challenges} />
          </div>
        </section>

        {/* Solution section */}
        <section className="mt-12">
          <SectionHeading>{labels.solutionTitle}</SectionHeading>
          <div className="mt-4 space-y-4">
            {content.solution.map((paragraph, idx) => (
              <Paragraph key={idx}>{paragraph}</Paragraph>
            ))}
          </div>
        </section>

        {/* Technical Architecture section (optional) */}
        {content.technicalArchitecture?.length ? (
          <section className="mt-12">
            <SectionHeading>{labels.technicalArchitectureTitle}</SectionHeading>
            <div className="mt-4 space-y-4">
              {content.technicalArchitecture.map((paragraph, idx) => (
                <Paragraph key={idx}>{paragraph}</Paragraph>
              ))}
            </div>
          </section>
        ) : null}

        {/* Results section */}
        <section className="mt-12">
          <SectionHeading>{labels.resultsTitle}</SectionHeading>
          <div className="mt-4 space-y-4">
            {content.results.map((paragraph, idx) => (
              <Paragraph key={idx}>{paragraph}</Paragraph>
            ))}
          </div>
        </section>

        {/* Quote */}
        {content.quote ? (
          <blockquote className="mt-10 border-l-4 border-black/10 pl-6 py-2">
            <p className="text-lg leading-8 font-light italic text-black/80 sm:text-xl">
              "{content.quote.text}"
            </p>
            <footer className="mt-3 text-sm font-medium text-black/60">
              — {content.quote.source}
            </footer>
          </blockquote>
        ) : null}

        {/* Success factors section */}
        <section className="mt-12">
          <SectionHeading>{labels.successFactorsTitle}</SectionHeading>
          <div className="mt-4">
            <BulletList items={content.successFactors} />
          </div>
        </section>
      </Container>
    </main>
  );
}
