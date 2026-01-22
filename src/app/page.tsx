import Image from "next/image";

const DEMO_URL = "https://meetings.hubspot.com/henrik-akselsen";

const useCases = [
  {
    title: "Chatbot kundeservice og support",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M8 12 C8 8 12 6 16 6 L32 6 C36 6 40 8 40 12 L40 28 C40 32 36 34 32 34 L20 34 L12 42 L12 34 L16 34 C12 34 8 32 8 28 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="18" cy="20" r="2" fill="currentColor" />
        <circle cx="24" cy="20" r="2" fill="currentColor" />
        <circle cx="30" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Guidet shoppingopplevelser",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 16 L12 40 C12 42 14 44 16 44 L32 44 C34 44 36 42 36 40 L36 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 16 L40 16 L38 10 C38 8 36 6 34 6 L14 6 C12 6 10 8 10 10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M18 6 L18 4 C18 2 20 2 22 2 L26 2 C28 2 30 2 30 4 L30 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line x1="24" y1="22" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="28" x2="30" y2="28" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "AI-basert søk på nettsiden",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="20"
          cy="20"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line x1="30" y1="30" x2="44" y2="44" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M36 8 L38 4 M42 14 L46 12 M44 22 L48 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Automatiseringer",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M24 4 L24 10 M24 38 L24 44 M4 24 L10 24 M38 24 L44 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9.86 9.86 L14.1 14.1 M33.9 33.9 L38.14 38.14 M9.86 38.14 L14.1 33.9 M33.9 14.1 L38.14 9.86"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

const flexibilityIntegrations = [
  "Ticketsystem (ZenDesk, SocialBoards, Salesforce)",
  "CRM og kundesystemer",
  "API-er og interne databaser",
];

const qualityResults = [
  "Mer presise svar",
  "Færre feil og hallusinasjoner",
  "Kontinuerlig læring basert på faktisk bruk",
];

const valueProps = [
  {
    text: "Øker salget",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polyline
          points="4 36 16 24 24 32 44 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <polyline
          points="32 12 44 12 44 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    text: "Gir raskere og bedre svar til brukere",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="20"
          cy="24"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <polyline
          points="20 14 20 24 28 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M34 32 L42 40" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle
          cx="42"
          cy="40"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    text: "Frigjør tid hos ansatte",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="24"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 44 C8 32 16 26 24 26 C32 26 40 32 40 44"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="38"
          cy="18"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <polyline
          points="38 14 38 18 41 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    text: "Gir innsikt i hva kundene faktisk spør om",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="20"
          cy="20"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line x1="29" y1="29" x2="42" y2="42" stroke="currentColor" strokeWidth="1.5" />
        <polyline
          points="12 24 16 20 20 26 28 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    text: "Muliggjør automatisering av komplekse prosesser",
    icon: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="24"
          cy="24"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line x1="24" y1="4" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="36" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="36" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="4" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="44" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="4" cy="24" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="44" cy="24" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const customers = [
  {
    name: "Akademika",
    src: "/images/logos/akademika.jpg",
  },
  {
    name: "Aller Media",
    src: "/images/logos/aller-media.jpg",
  },
  {
    name: "Tore Ligaard",
    src: "/images/logos/tore-ligaard.jpg",
  },
  {
    name: "Oslo Nye Høyskole",
    src: "/images/logos/oslo-nye-hoyskole.png",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">{children}</div>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-light tracking-[0.08em] text-black sm:text-4xl">
      {children}
    </h2>
  );
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 font-light text-zinc-600 sm:text-lg">
      {children}
    </p>
  );
}

function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center border-2 border-black bg-black px-10 py-4 text-[11px] font-normal uppercase tracking-[0.25em] text-white transition-colors hover:bg-transparent hover:text-black"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <div className="text-base font-light uppercase tracking-[0.2em] text-black sm:text-lg">
              Tindre
            </div>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-black bg-black px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Book demo
            </a>
          </div>
        </Container>
      </header>

      <main>
        <section className="border-b border-zinc-200 bg-white pt-48 pb-32 text-center sm:pt-56 sm:pb-40">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h1 className="text-5xl font-extralight uppercase tracking-[0.35em] text-black sm:text-6xl lg:text-8xl">
                Tindre
              </h1>
              <h2 className="mt-6 text-xl font-light tracking-[0.06em] text-black sm:text-2xl">
                Skreddersydde AI-agenter
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 font-light text-zinc-600 sm:text-lg">
                Bygg AI-agenter for kundeservice, salg, datainnsikt og automatisering – tilpasset virksomheten din og driftet på norsk infrastruktur.
              </p>

              <div className="mt-12">
                <CtaButton href={DEMO_URL}>Book demo</CtaButton>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-zinc-50 py-24 sm:py-28">
          <Container>
            <SectionTitle>Hva er Tindre</SectionTitle>
            <SectionSubtitle>
              Tindre er en plattform for å bygge, drifte og forbedre skreddersydde AI-agenter. I stedet for generiske chatbots får du brukeropplevelser som er tilpasset dine data og ditt brand.
            </SectionSubtitle>

            <div className="mx-auto mt-12 max-w-4xl">
              <h3 className="text-xl font-normal text-black">Produkter</h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {useCases.map(({ title, icon }) => (
                  <div
                    key={title}
                    className="group border border-zinc-200 bg-white p-8 transition-shadow hover:border-black hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
                  >
                    <div className="h-12 w-12 text-black">{icon}</div>
                    <div className="mt-6 text-[15px] font-normal leading-7 text-black">{title}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <Container>
            <SectionTitle>Hvorfor velge Tindre</SectionTitle>

            <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2">
              <div>
                <div className="inline-block border-b border-black pb-2 text-[11px] font-normal uppercase tracking-[0.25em] text-black">
                  Fleksibilitet
                </div>
                <h3 className="mt-6 text-2xl font-normal leading-snug text-black">
                  Skreddersydde brukeropplevelser og integrasjoner
                </h3>
                <p className="mt-6 text-base leading-8 font-light text-zinc-600">
                  Tindre tilpasses dine behov – ikke omvendt. Vi bygger egne grensesnitt, kobler på eksisterende systemer og setter opp agentflyter som matcher virkelige arbeidsprosesser.
                </p>

                <p className="mt-6 text-sm font-semibold text-black">Typiske integrasjoner:</p>
                <ul className="mt-4">
                  {flexibilityIntegrations.map((item) => (
                    <li
                      key={item}
                      className="relative border-b border-black/5 py-4 pl-8 text-base font-light text-zinc-600"
                    >
                      <span className="absolute left-0 top-4 text-black">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="inline-block border-b border-black pb-2 text-[11px] font-normal uppercase tracking-[0.25em] text-black">
                  Kvalitet
                </div>
                <h3 className="mt-6 text-2xl font-normal leading-snug text-black">
                  Automatisert kvalitetsikring av svar
                </h3>
                <p className="mt-6 text-base leading-8 font-light text-zinc-600">
                  Svarene overvåkes, måles og forbedres kontinuerlig. Du får innsikt i hva agentene svarer, hvilke kilder som brukes og hvor kvaliteten kan forbedres.
                </p>

                <p className="mt-6 text-sm font-semibold text-black">Resultatet er:</p>
                <ul className="mt-4">
                  {qualityResults.map((item) => (
                    <li
                      key={item}
                      className="relative border-b border-black/5 py-4 pl-8 text-base font-light text-zinc-600"
                    >
                      <span className="absolute left-0 top-4 text-black">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-zinc-50 py-24 sm:py-28">
          <Container>
            <SectionTitle>Slik skaper Tindre verdi</SectionTitle>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {valueProps.map(({ text, icon }) => (
                <div
                  key={text}
                  className="border border-zinc-200 bg-transparent p-8 transition-shadow hover:border-black hover:shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  <div className="h-12 w-12 text-black">{icon}</div>
                  <p className="mt-6 text-[15px] font-normal leading-7 text-black">{text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-24 sm:py-28">
          <Container>
            <SectionTitle>Våre kunder</SectionTitle>

            <div className="mt-14 border border-zinc-200 px-10 py-14 sm:px-14">
              <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
                {customers.map(({ name, src }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-4 text-sm font-normal tracking-[0.08em] text-zinc-500/80 transition-colors hover:text-black"
                  >
                    <Image
                      src={src}
                      alt={`${name} logo`}
                      width={120}
                      height={60}
                      className="h-[60px] w-auto max-w-[120px] object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="demo" className="border-t border-zinc-200 bg-zinc-50 py-24 sm:py-28">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-light tracking-[0.08em] text-black sm:text-4xl">
                Vil du se Tindre i praksis?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 font-light text-zinc-600 sm:text-lg">
                Book en demo, så viser vi hvordan Tindre kan tilpasses dine behov – med ekte data og reelle referanser.
              </p>

              <div className="mt-10">
                <CtaButton href={DEMO_URL}>Book demo</CtaButton>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-10">
        <Container>
          <p className="text-center text-xs font-light tracking-[0.12em] text-zinc-400">
            © 2026 Tindre. Alle rettigheter reservert.
          </p>
        </Container>
      </footer>
    </div>
  );
}
