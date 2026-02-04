import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";
import { Container } from "@/components/blocks/Container";
import { SectionSubtitle } from "@/components/blocks/SectionSubtitle";
import { SectionTitle } from "@/components/blocks/SectionTitle";
import type { Locale } from "@/i18n/messages";

export type CaseStudy = {
  kicker?: string;
  title: string;
  description: string;
  quote?: string;
  align?: string;
  quoteSource?: {
    name?: string;
    title?: string;
    org?: string;
    logoSrc?: string;
    href?: string;
  };
  imageSrc: string;
  imageAlt: string;
  metrics?: readonly {
    value: number | string;
    label: string;
    kind?: string;
  }[];
  cta?: {
    href: string;
    label: string;
    leadingLogoSrc?: string;
    leadingLogoAlt?: string;
  };
};

type CaseStudiesProps = {
  id?: string;
  lang: Locale;
  title: string;
  subtitle?: string;
  sectionQuote?: {
    text: string;
    sourcePrefix: string;
    logoSrc: string;
    logoAlt: string;
  };
  hideItemCtas?: boolean;
  items: readonly CaseStudy[];
  seeAll?: { label: string; href: string };
};

function resolveHref(lang: Locale, href: string) {
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  if (href.startsWith("/")) return `/${lang}${href}`;
  return `/${lang}/${href}`;
}

export function CaseStudies({
  id,
  lang,
  title,
  subtitle,
  sectionQuote,
  hideItemCtas = false,
  items,
  seeAll,
}: CaseStudiesProps) {
  return (
    <section id={id} className="bg-white py-24 sm:py-28">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionTitle>{title}</SectionTitle>
            {subtitle ? <SectionSubtitle>{subtitle}</SectionSubtitle> : null}
          </div>

          {/* Intentionally inline SVG (server-safe, no icon lib) */}
          {seeAll ? (
            <Link
              href={resolveHref(lang, seeAll.href)}
              className="inline-flex items-center gap-2 pb-1 text-sm font-semibold tracking-tight text-black/50 hover:text-black"
            >
              <span>{seeAll.label}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4 translate-y-px"
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
            </Link>
          ) : null}
        </div>

        <div className="mt-14 flex flex-col gap-14">
          {items.map((item, idx) => {
            const reverse = idx % 2 === 1;
            const alignRight = item.align === "right";
            const ctaAlignClass = alignRight ? "self-end" : reverse ? "self-start" : "self-end";

            return (
              <div
                key={item.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reverse ? "lg:order-2" : undefined}>
                  <div className="relative w-full aspect-3/2 border border-zinc-200">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover"
                    />

                    {item.metrics?.length ? (
                      <div className="absolute inset-x-0 bottom-0 h-1/3 border-t border-white/10 bg-black/60">
                        <div className="flex h-full divide-x divide-white/20 px-5 py-4">
                          {item.metrics.slice(0, 3).map((metric, metricIdx) => {
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
                              <div
                                key={metric.label}
                                className={[
                                  "flex flex-1 flex-col justify-center px-4",
                                  metricIdx === 0 ? "pl-0" : "",
                                  metricIdx === 2 ? "pr-0" : "",
                                ]
                                  .filter(Boolean)
                                  .join(" ")}
                              >
                              <div className="text-[28px] font-semibold tracking-tight text-white sm:text-[32px]">
                                {value}
                              </div>
                              <div className="mt-1 text-[12px] font-medium tracking-tight text-white/75">
                                {metric.label}
                              </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div
                  className={[
                    reverse ? "lg:order-1" : "",
                    "flex flex-col",
                    alignRight ? "items-end text-right" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {item.kicker ? (
                    <div className="inline-block text-[11px] font-normal uppercase tracking-[0.25em] text-black">
                      {item.kicker}
                    </div>
                  ) : null}
                  <div className="text-[22px] font-normal tracking-[0.02em] text-black sm:text-2xl">
                    {item.title}
                  </div>
                  <p className="mt-5 max-w-2xl text-base leading-8 font-light text-zinc-600 sm:text-lg">
                    {item.description}
                  </p>
                  {item.quote ? (
                    <blockquote
                      className={[
                        "mt-6 max-w-2xl text-sm leading-7 font-light text-black/80",
                        alignRight
                          ? "border-r border-black/15 pr-4"
                          : "border-l border-black/15 pl-4",
                      ].join(" ")}
                    >
                      <span className="italic">“{item.quote}”</span>
                      {item.quoteSource ? (
                        <div
                          className={[
                            "mt-3 flex items-center gap-2 text-black/60",
                            alignRight ? "justify-end" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {(() => {
                            const subtitle = [
                              item.quoteSource.title,
                              item.quoteSource.org,
                            ]
                              .filter(Boolean)
                              .join(" · ");
                            const hasMeta = Boolean(item.quoteSource.name) || Boolean(subtitle);
                            const meta = hasMeta ? (
                              <div className="flex flex-col">
                                {item.quoteSource.name ? (
                                  <div className="text-xs font-semibold tracking-tight text-black/70">
                                    {item.quoteSource.name}
                                  </div>
                                ) : null}
                                {subtitle ? (
                                  <div className="text-xs font-light tracking-tight">{subtitle}</div>
                                ) : null}
                              </div>
                            ) : null;

                            const logo = item.quoteSource.logoSrc ? (
                              <Image
                                src={item.quoteSource.logoSrc}
                                alt={`${item.quoteSource.org ?? item.quoteSource.name ?? "Company"} logo`}
                                width={44}
                                height={18}
                                className="h-[18px] w-auto"
                              />
                            ) : null;

                            const inner = (
                              <div className="inline-flex items-center gap-3">
                                {meta}
                                {logo}
                              </div>
                            );

                            if (!item.quoteSource.href) return inner;

                            return (
                              <a
                                href={item.quoteSource.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 hover:text-black"
                              >
                                {inner}
                              </a>
                            );
                          })()}
                        </div>
                      ) : null}
                    </blockquote>
                  ) : null}

                  {!hideItemCtas && item.cta ? (
                    <div className="mt-8">
                      <div
                        className={[
                          "flex items-center gap-4",
                          ctaAlignClass,
                        ].join(" ")}
                      >
                        <Button
                          href={resolveHref(lang, item.cta.href)}
                          variant="outline"
                          size="sm"
                        >
                          {item.cta.label}
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {sectionQuote ? (
          <div className="mt-14 flex justify-center">
            <figure className="max-w-2xl text-center">
              <blockquote className="text-sm leading-7 font-light text-black/80">
                <span className="italic">“{sectionQuote.text}”</span>
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-center gap-3 text-black/60">
                <span className="text-xs font-semibold tracking-tight text-black/70">
                  {sectionQuote.sourcePrefix}
                </span>
                <Image
                  src={sectionQuote.logoSrc}
                  alt={sectionQuote.logoAlt}
                  width={44}
                  height={18}
                  className="h-[18px] w-auto opacity-80"
                />
              </figcaption>
            </figure>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

