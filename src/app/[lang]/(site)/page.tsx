import { notFound } from "next/navigation";
import Image from "next/image";

import {
  ChatCircleDots,
  ChartLineUp,
  GearSix,
  MagnifyingGlass,
  ShieldCheck,
  UserSwitch,
  User,
  FileText,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/Button";
import { BrandMarquee } from "@/components/BrandMarquee";
import { CaseStudies } from "@/components/blocks/CaseStudies";
import { Container } from "@/components/blocks/Container";
import { PeopleStack } from "@/components/PeopleStack";
import { PeopleStackLeft } from "@/components/PeopleStackLeft";
import { SectionSubtitle } from "@/components/blocks/SectionSubtitle";
import { SectionTitle } from "@/components/blocks/SectionTitle";
import { UseCasesGrid } from "@/components/UseCasesGrid";
import { ValuePropsGrid } from "@/components/ValuePropsGrid";
import { getMessages, hasLocale } from "@/i18n/messages";

const iconMap = {
  support: ChatCircleDots,
  guide: User,
  search: MagnifyingGlass,
  automation: GearSix,
  handoff: UserSwitch,
  sources: FileText,
  quality: ChatCircleDots,
  insight: ChartLineUp,
  shield: ShieldCheck,
} as const;

function replaceFrontkomWithLogo(text: string) {
  const needle = "Frontkom";
  const idx = text.indexOf(needle);
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const after = text.slice(idx + needle.length);

  return (
    <>
      {before}
      <a
        href="https://frontkom.no"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center align-baseline hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 ring-offset-white"
      >
        <span
          aria-hidden="true"
          className="inline-block h-[18px] w-[84px] translate-y-[3px] bg-current"
          style={{
            WebkitMaskImage: "url(/images/logos/fk.svg)",
            maskImage: "url(/images/logos/fk.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
        <span className="sr-only">Frontkom</span>
      </a>
      {after}
    </>
  );
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getMessages(lang);

  const trustedByLogos = m.home.hero.trustedByLogos;
  const afterHero = m.home.afterHero;
  const people = [
    "/images/people/sm.jpeg",
    "/images/people/tk.png",
    "/images/people/pa.webp",
    "/images/people/ha.webp",
  ];

  return (
    <div id="top" className="min-h-screen">
      <main>
        <section
          id="hero"
          className="relative flex min-h-svh items-center overflow-hidden border-b border-zinc-200 bg-white pt-20 pb-20"
        >
          <div className="relative z-10 w-full">
            <Container>
              {/* Compensate for the brand row so hero centers as if it wasn’t included. */}
              <div className="mx-auto max-w-4xl text-center -mb-24">
                <h1 className="heading-hero">
                  {m.home.hero.title}
                </h1>
                <h2 className="mt-6 text-xl font-light tracking-[0.06em] text-black sm:text-2xl">
                  {m.home.hero.subtitle}
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-base leading-8 font-light text-zinc-600 sm:text-lg">
                  {replaceFrontkomWithLogo(m.home.hero.description)}
                </p>

                <div className="mt-12 flex justify-center">
                  <Button href="https://meetings.hubspot.com/sverre-oeie/tindreintroduction" withArrow>
                    {m.cta.bookDemo}
                  </Button>
                </div>

                <div className="mx-auto mt-14 max-w-5xl">
                  <BrandMarquee logos={trustedByLogos} />
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* 1) Hva er Tindre */}
        <section id="what" className="scroll-mt-24 bg-zinc-50 py-24 sm:py-28">
          <Container>
            <SectionTitle>{m.home.what.title}</SectionTitle>
            <SectionSubtitle>{m.home.what.subtitle}</SectionSubtitle>
          </Container>
        </section>

        {/* 2) Hva kan AI-agentene gjøre? */}
        <section id="use-cases" className="scroll-mt-24 bg-white py-24 sm:py-28">
          <Container>
            <SectionTitle>{afterHero.customerUses.title}</SectionTitle>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {afterHero.customerUses.items.map((item) => (
                <div
                  key={item.text}
                  className="flex gap-5 border border-zinc-200 bg-transparent p-8 transition-shadow hover:border-black hover:shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  <div className="shrink-0">
                    {(() => {
                      const PhosphorIcon =
                        item.icon && Object.prototype.hasOwnProperty.call(iconMap, item.icon)
                          ? iconMap[item.icon as keyof typeof iconMap]
                          : GearSix;
                      return <PhosphorIcon aria-hidden="true" size={24} weight="light" />;
                    })()}
                  </div>
                  <p className="text-[15px] leading-7 font-light text-zinc-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3) Slik fungerer Tindre (agent-lifecycle) */}
        <section id="how" className="scroll-mt-24 bg-zinc-50 py-24 sm:py-28">
          <Container>
            <SectionTitle>{afterHero.lifecycle.title}</SectionTitle>

            {/* Mobile: vertical timeline */}
            <ol className="mt-12 flex flex-col gap-10 border-l border-zinc-200 pl-6 lg:hidden">
              {afterHero.lifecycle.steps.map((step, idx) => (
                <li key={step.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[39px] top-0 flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-semibold tracking-tight text-black"
                  >
                    {idx + 1}
                  </span>
                  <div className="text-[15px] font-semibold tracking-tight text-black">
                    {step.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 font-light text-zinc-600">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>

            {/* Desktop: horizontal stepper */}
            <ol className="mt-14 hidden gap-6 lg:grid lg:grid-cols-5">
              {afterHero.lifecycle.steps.map((step, idx) => (
                <li key={step.title} className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-semibold tracking-tight text-black">
                      {idx + 1}
                    </span>
                    {idx < afterHero.lifecycle.steps.length - 1 ? (
                      <span aria-hidden="true" className="h-px flex-1 bg-zinc-200" />
                    ) : null}
                  </div>
                  <div className="mt-6">
                    <div className="text-[15px] font-semibold tracking-tight text-black">
                      {step.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 font-light text-zinc-600">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* 4) Moduler */}
        <section id="modules" className="scroll-mt-24 bg-white py-24 sm:py-28">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <SectionTitle className="text-[28px] sm:text-[34px]">
                {m.home.what.productsTitle}
              </SectionTitle>
              {/* TODO(nav): Re-enable "Se alle moduler" link when ready. */}
            </div>
            <UseCasesGrid items={m.home.what.useCases} />
          </Container>
        </section>

        <section aria-label="IBM quote" className="bg-white py-10 sm:py-12">
          <Container>
            <div className="flex justify-center">
              <figure className="max-w-2xl text-center">
                <blockquote className="text-sm leading-7 font-light text-black/80">
                  <span className="italic">“{m.home.caseStudies.sectionQuote.text}”</span>
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-center gap-3 text-black/60">
                  <span className="text-xs font-semibold tracking-tight text-black/70">
                    {m.home.caseStudies.sectionQuote.sourcePrefix}
                  </span>
                  <Image
                    src="/images/logos/ibm.svg"
                    alt={m.home.caseStudies.sectionQuote.logoAlt}
                    width={44}
                    height={18}
                    className="h-[18px] w-auto opacity-80"
                  />
                </figcaption>
              </figure>
            </div>
          </Container>
        </section>

        {/* 5) Kvalitet, kontroll og trygghet */}
        <section id="trust" className="scroll-mt-24 bg-white py-24 sm:py-28">
          <Container>
            <SectionTitle>{afterHero.trust.title}</SectionTitle>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {afterHero.trust.items.map((item) => (
                <div
                  key={item.title}
                  className="border border-zinc-200 bg-transparent p-8 transition-shadow hover:border-black hover:shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      {(() => {
                        const PhosphorIcon =
                          item.icon && Object.prototype.hasOwnProperty.call(iconMap, item.icon)
                            ? iconMap[item.icon as keyof typeof iconMap]
                            : GearSix;
                        return <PhosphorIcon aria-hidden="true" size={24} weight="light" />;
                      })()}
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold tracking-tight text-black">
                        {item.title}
                      </div>
                      <p className="mt-3 text-sm leading-7 font-light text-zinc-600">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* (Restored) Slik skaper Tindre verdi */}
        <section id="value" className="scroll-mt-24 bg-zinc-50 py-24 sm:py-28">
          <Container>
            <SectionTitle>{m.home.value.title}</SectionTitle>
            <ValuePropsGrid items={m.home.value.items} />
          </Container>
        </section>

        <CaseStudies
          lang={lang}
          title={m.home.caseStudies.title}
          items={m.home.caseStudies.items}
          // TODO(nav): Re-enable "Se alle" link for customer stories.
          // seeAll={{ label: m.home.caseStudies.seeAll, href: "/stories" }}
          hideItemCtas
        />

        <section
          id="demo"
          className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 py-24 sm:py-28"
        >
          <Container>
            <div className="max-w-4xl">
              <PeopleStackLeft srcs={people} alt={lang === "no" ? "Team" : "Team"} />
              <SectionTitle className="mt-8">{m.home.demo.title}</SectionTitle>
              <p className="mt-6 max-w-2xl text-base leading-8 font-light text-zinc-600 sm:text-lg">
                {m.home.demo.description}
              </p>

              <div className="mt-10">
                <Button href="https://meetings.hubspot.com/sverre-oeie/tindreintroduction" withArrow>
                  {m.cta.bookDemo}
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}

