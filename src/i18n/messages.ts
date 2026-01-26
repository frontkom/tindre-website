export const locales = ["no", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "no";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const messages = {
  no: {
    nav: {
      solutions: "Løsninger",
      solutionsItems: {
        customerSupport: "Kundeservice",
        ecommerce: "E-handel",
        government: "Offentlig sektor",
        travelHospitality: "Reiseliv",
      },
      references: "Kundehistorier",
      integrations: "Integrasjoner",
      contact: "Kontakt",
    },
    common: {
      comingSoon: "Kommer snart.",
    },
    cta: {
      bookDemo: "Book demo",
    },
    home: {
      hero: {
        title: "Fra data til handling",
        subtitle: "Skreddersydde AI-agenter",
        description:
          "Tindre er bygget på erfaring fra over 80 konsulenter og utviklere i Frontkom, med mange års erfaring fra komplekse digitale løsninger i privat og offentlig sektor.",
        trustedByLabel: "Anbefalt av",
        trustedByLogos: [
          { src: "/images/logos/aller.png", alt: "Aller" },
          { src: "/images/logos/akademika.svg", alt: "Akademika" },
          { src: "/images/logos/ibm.svg", alt: "IBM" },
          { src: "/images/logos/nfk.svg", alt: "NFK" },
          { src: "/images/logos/onh.svg", alt: "ONH" },
          { src: "/images/logos/tore_ligaard.svg", alt: "Tore Ligaard" },
        ],
      },
      afterHero: {
        valueIntro: {
          title: "Fra generisk chatbot til skreddersydd AI-agent",
          subtitle:
            "Tindre er ikke en ferdig chatbot. Det er en plattform for å bygge AI-agenter som er tilpasset dine data, dine systemer og dine arbeidsprosesser – og som forbedres kontinuerlig basert på faktisk bruk.",
          points: [
            "Bygget på virksomhetens egne data og kunnskap",
            "Tilpasset brukeropplevelse og brand",
            "Integrert med eksisterende systemer",
            "Overvåket og forbedret over tid",
          ],
        },
        customerUses: {
          title: "Hva bruker kundene Tindre til?",
          items: [
            { icon: "support", text: "Svare på spørsmål – 24/7" },
            { icon: "guide", text: "Veilede brukere steg for steg" },
            { icon: "search", text: "Gjøre dokumenter og rapporter søkbare med naturlig språk" },
            { icon: "automation", text: "Automatisere oppgaver og prosesser" },
            { icon: "handoff", text: "Eskalere saker til menneske" },
            { icon: "insight", text: "Avdekke behov, mønstre og forbedringspotensial i bruk" },
          ],
        },
        lifecycle: {
          title: "Slik bygger og forbedrer vi AI-agenter",
          steps: [
            {
              title: "Forstår behovet",
              body: "Kartlegger hva agenten skal gjøre, hvem den er for og hvilke krav som gjelder.",
            },
            {
              title: "Kobler data og systemer",
              body: "Dokumenter, nettsider, API-er og interne systemer gjøres tilgjengelig.",
            },
            {
              title: "Tester i sandkasse",
              body: "Agenten testes i realistiske scenarioer før produksjon.",
            },
            {
              title: "Produksjon i ditt miljø",
              body: "Agenten lanseres i riktig grensesnitt, med riktig tone og brand.",
            },
            {
              title: "Overvåker og forbedrer",
              body: "Bruk og kvalitet analyseres for kontinuerlig forbedring.",
            },
          ],
        },
        trust: {
          title: "Bygget for kvalitet, kontroll og tillit",
          items: [
            {
              icon: "sources",
              title: "Svar med kilder",
              body: "Se hvilke dokumenter og data svarene bygger på.",
            },
            {
              icon: "quality",
              title: "Mindre hallusinasjoner",
              body: "Strukturert kunnskap og tydelig agentlogikk gir mer presise svar.",
            },
            {
              icon: "insight",
              title: "Full innsikt",
              body: "Følg med på hva agentene svarer, hva brukerne spør om og hvor det kan forbedres.",
            },
            {
              icon: "shield",
              title: "Sikkerhet og personvern",
              body: "Bygget for GDPR, logging og rollebasert tilgang.",
            },
          ],
        },
        proof: {
          title: "Dokumentert effekt hos våre kunder",
          stats: [
            { value: "–55%", label: "Færre henvendelser til kundesenter" },
            { value: "10 000+", label: "Henvendelser håndtert per år" },
            { value: "24/7", label: "Tilgjengelighet" },
          ],
          quote: {
            text: "Chatboten har blitt en verdifull ny kollega som bidrar til bedre kundeservice, raskere svar og mer effektiv ressursbruk.",
            source: "Nordland fylkeskommune",
          },
        },
      },
      socialProof: {
        label: "Anbefalt av",
        quotes: [
          {
            quote: "Et prakteksempel på hvordan man gjør det riktig.",
            quoteSource: {
              name: "Toppleder i",
              title: undefined,
              org: undefined,
              logoSrc: "/images/logos/ibm.svg",
              href: "https://www.ibm.com/new/product-blog/what-frontkom-learned-building-a-scalable-platform-with-ibm-for-norwegian-public-transport",
            },
          },
          {
            quote:
              "Chatboten har blitt en verdifull ny kollega som bidrar til bedre kundeservice, raskere svar og mer effektiv ressursbruk.",
            quoteSource: {
              name: undefined,
              title: undefined,
              org: undefined,
              logoSrc: "/images/logos/nfk.svg",
              href: "https://www.ibm.com/new/product-blog/what-frontkom-learned-building-a-scalable-platform-with-ibm-for-norwegian-public-transport",
            },
          },
        ],
      },
      what: {
        title: "Hva er Tindre",
        subtitle:
          "Tindre er en plattform for å bygge, drifte og forbedre skreddersydde AI-agenter – tilpasset virksomhetens data, systemer og faktiske arbeidsprosesser.",
        productsTitle: "Moduler",
        seeAllModules: "Se alle moduler",
        useCases: [
          {
            icon: "support",
            title: "Chatbot kundeservice og support",
            description:
              "Avlast teamet med en 24/7 agent som håndterer henvendelser, løser saker og eskalerer når det trengs.",
          },
          {
            icon: "shopping",
            title: "Guidede shoppingopplevelser",
            description:
              "Hjelp brukere å finne riktig produkt med personaliserte anbefalinger, behovsavklaring og sømløs handlingsflyt.",
          },
          {
            icon: "search",
            title: "AI-basert søk på nettsiden",
            description:
              "Gjør innholdet ditt lett å finne med semantisk søk som forstår intensjon og gir presise svar — ikke bare treff.",
          },
          {
            icon: "automations",
            title: "Automatiseringer",
            description:
              "Automatiser repeterende oppgaver og komplekse prosesser på tvers av systemer med sikre agentflyter og tydelig kontroll.",
          },
        ],
      },
      why: {
        title: "Hvorfor velge Tindre",
        flexibilityLabel: "Fleksibilitet",
        flexibilityTitle: "Skreddersydde brukeropplevelser og integrasjoner",
        flexibilityBody:
          "Tindre tilpasses dine behov – ikke omvendt. Vi bygger egne grensesnitt, kobler på eksisterende systemer og setter opp agentflyter som matcher virkelige arbeidsprosesser.",
        flexibilityListTitle: "Typiske integrasjoner:",
        flexibilityIntegrations: [
          "Ticketsystem (ZenDesk, SocialBoards, Salesforce)",
          "CRM og kundesystemer",
          "API-er og interne databaser",
        ],
        qualityLabel: "Kvalitet",
        qualityTitle: "Automatisert kvalitetsikring av svar",
        qualityBody:
          "Svarene overvåkes, måles og forbedres kontinuerlig. Du får innsikt i hva agentene svarer, hvilke kilder som brukes og hvor kvaliteten kan forbedres.",
        qualityListTitle: "Resultatet er:",
        qualityResults: ["Mer presise svar", "Færre feil og hallusinasjoner", "Kontinuerlig læring basert på faktisk bruk"],
      },
      value: {
        title: "Slik skaper Tindre målbar verdi",
        items: [
          "Forbedrer kundeopplevelsen (raskere, bedre svar, 24/7 support)",
          "Øker salg og konvertering",
          "Frigjør tid hos ansatte og øker produktiviteten",
          "Reduserer driftskostnader",
          "Gir innsikt i kundebehov og -atferd",
          "Muliggjør automatisering av komplekse prosesser",
        ],
      },
      caseStudies: {
        title: "Kundehistorier",
        seeAll: "Se alle",
        sectionQuote: {
          text: "Et prakteksempel på hvordan man gjør det riktig",
          sourcePrefix: "Toppleder i",
          logoAlt: "IBM",
        },
        items: [
          {
            kicker: "Offentlig sektor",
            title: "Reiseassistent for kollektivtrafikk i Nordland fylke",
            description:
              "En 24/7 reiseassistent som svarer på spørsmål om buss og ferge med oppdaterte data fra rutetabeller, trafikk og driftsmeldinger – og avlaster kundesenteret.",
            quote:
              "Chatboten har blitt en verdifull ny kollega som bidrar til bedre kundeservice, raskere svar og mer effektiv ressursbruk.",
            quoteSource: {
              org: "Nordland Fylkeskommune",
              logoSrc: "/images/logos/nfk.svg",
              href: undefined,
            },
            imageAlt: "Reis Nordland – reiseassistent",
            imageSrc: "/images/stories/nordland-case.jpg",
            metrics: [
              { value: -55, kind: "percent", label: "Færre henvendelser til kundesenter" },
              { value: "10 000+", kind: "raw", label: "Henvendelser per år" },
            ],
            cta: {
              label: "Les kundehistorie",
              href: "https://www.ibm.com/new/product-blog/what-frontkom-learned-building-a-scalable-platform-with-ibm-for-norwegian-public-transport",
            },
          },
          {
            kicker: "E-handel",
            title: "Automatiserer kundeservice for Akademika",
            description:
              "En kundeserviceagent som svarer på spørsmål om bestillinger, levering, retur og produkttilgjengelighet – og hjelper kunder å finne riktig pensum. Agenten eskalerer til menneskelig kundeservice når det trengs, og avlaster teamet i travle perioder.",
            imageAlt: "Kundeserviceagent for Norges største fagbokhandel",
            imageSrc: "/images/stories/akademika-case.jpg",
            metrics: [
              { value: "10 000 000+ produkter", kind: "raw", label: "Oppdatert hver uke" },
            ],
            cta: {
              label: "Les kundehistorie",
              href: "/stories",
            },
          },
        ],
      },
      demo: {
        title: "Vil du se hvordan Tindre kan fungere for dere?",
        description:
          "Book en demo, så viser vi hvordan Tindre kan tilpasses dine behov – med ekte data og reelle eksempler.",
      },
    },
    pages: {
      references: { title: "Kundehistorier" },
      integrations: { title: "Integrasjoner" },
      modules: {
        title: "Moduler",
        subtitle: "Utforsk modulene som er tilgjengelige i Tindre.",
        useCases: [
          {
            icon: "support",
            title: "Chatbot kundeservice og support",
            description:
              "Avlast teamet med en 24/7 agent som håndterer henvendelser, løser saker og eskalerer når det trengs.",
          },
          {
            icon: "shopping",
            title: "Guidede shoppingopplevelser",
            description:
              "Hjelp brukere å finne riktig produkt med personaliserte anbefalinger, behovsavklaring og sømløs handlingsflyt.",
          },
          {
            icon: "search",
            title: "AI-basert søk på nettsiden",
            description:
              "Gjør innholdet ditt lett å finne med semantisk søk som forstår intensjon og gir presise svar — ikke bare treff.",
          },
          {
            icon: "automations",
            title: "Automatiseringer",
            description:
              "Automatiser repeterende oppgaver og komplekse prosesser på tvers av systemer med sikre agentflyter og tydelig kontroll.",
          },
          {
            icon: "sessions",
            title: "Sesjoner",
            description: "AI-analyse og innsikt.",
          },
          {
            icon: "leads",
            title: "Leads",
            description:
              "Finn leads fra sesjonsinnhold eller ved at agenten din jobber for å skaffe dem.",
          },
          {
            icon: "recommendations",
            title: "Anbefalingsmotor",
            description:
              "Anbefal kurs, hoteller eller hva som helst med en interaktiv flyt drevet av agentene dine og data.",
          },
          {
            icon: "internalChat",
            title: "Intern chat",
            description: "Chat med agentene dine i dashboardet.",
          },
        ],
      },
      contact: { title: "Kontakt" },
      book: {
        title: "Book demo",
        description: "Velg et tidspunkt som passer, så tar vi en prat.",
        backToHome: "Tilbake",
        widget: {
          timeNeeded: "Hvor mye tid trenger du?",
          minutes30: "30 min",
          minutes60: "60 min",
          dateLabel: "Dato",
          prevDay: "Forrige dag",
          nextDay: "Neste dag",
          openCalendar: "Åpne kalender",
          pickATime: "Velg tidspunkt",
          loading: "Laster ledige tider…",
          noTimes: "Ingen ledige tider funnet for denne perioden.",
          pickTimeFirst: "Velg et tidspunkt først.",
          yourDetails: "Dine opplysninger",
          firstName: "Fornavn",
          lastName: "Etternavn",
          company: "Organisasjon",
          email: "E-post",
          back: "Tilbake",
          continue: "Fortsett",
          book: "Book demo",
          booking: "Booker…",
          bookedTitle: "Booket!",
          bookedBody: "Takk — vi har reservert tiden.",
          errorTitle: "Noe gikk galt",
          tryAgain: "Prøv igjen",
        },
      },
    },
    notFound: {
      message: "Siden finnes ikke.",
      backToHome: "Gå til forsiden",
    },
    footer: {
      language: "Språk",
      navigation: "Navigasjon",
      rightsReserved: "Alle rettigheter reservert.",
    },
    language: {
      no: "Norsk",
      en: "English",
    },
  },
  en: {
    nav: {
      solutions: "Solutions",
      solutionsItems: {
        customerSupport: "Customer support",
        ecommerce: "Ecommerce",
        government: "Government",
        travelHospitality: "Travel & hospitality",
      },
      references: "Customer Stories",
      integrations: "Integrations",
      contact: "Contact",
    },
    common: {
      comingSoon: "Coming soon.",
    },
    cta: {
      bookDemo: "Book demo",
    },
    home: {
      hero: {
        title: "From data to action",
        subtitle: "Custom AI agents, designed by experts",
        description:
          "Tindre is built on experience from more than 80 consultants and developers at Frontkom, with years of experience delivering complex digital solutions in both the private and public sector.",
        trustedByLabel: "Trusted by",
        trustedByLogos: [
          { src: "/images/logos/aller.png", alt: "Aller" },
          { src: "/images/logos/akademika.svg", alt: "Akademika" },
          { src: "/images/logos/ibm.svg", alt: "IBM" },
          { src: "/images/logos/nfk.svg", alt: "NFK" },
          { src: "/images/logos/onh.svg", alt: "ONH" },
          { src: "/images/logos/tore_ligaard.svg", alt: "Tore Ligaard" },
        ],
      },
      afterHero: {
        valueIntro: {
          title: "From a generic chatbot to a tailored AI agent",
          subtitle:
            "Tindre isn’t an off-the-shelf chatbot. It’s a platform for building AI agents tailored to your data, your systems, and your workflows — and continuously improved based on real usage.",
          points: [
            "Built on your organization’s data and knowledge",
            "Tailored user experience and brand",
            "Integrated with your existing systems",
            "Monitored and improved over time",
          ],
        },
        customerUses: {
          title: "What do customers use Tindre for?",
          items: [
            { icon: "support", text: "Answer questions — 24/7" },
            { icon: "guide", text: "Guide users step by step" },
            {
              icon: "search",
              text: "Make large volumes of documents and reports searchable with natural language",
            },
            { icon: "automation", text: "Automate tasks and processes" },
            { icon: "handoff", text: "Escalate to a human when needed" },
            { icon: "insight", text: "Identify needs, patterns, and improvement opportunities from usage" },
          ],
        },
        lifecycle: {
          title: "How we build and improve AI agents",
          steps: [
            {
              title: "Understand the need",
              body: "Define what the agent should do, who it’s for, and which requirements apply.",
            },
            {
              title: "Connect data and systems",
              body: "Make documents, websites, APIs, and internal systems available to the agent.",
            },
            {
              title: "Test in a sandbox",
              body: "Test the agent in realistic scenarios before production.",
            },
            {
              title: "Deploy in your environment",
              body: "Launch in the right interface, with the right tone and brand.",
            },
            {
              title: "Monitor and improve",
              body: "Usage and quality are analyzed for continuous improvement.",
            },
          ],
        },
        trust: {
          title: "Built for quality, control, and trust",
          items: [
            {
              icon: "sources",
              title: "Answers with sources",
              body: "See which documents and data the answers are based on.",
            },
            {
              icon: "quality",
              title: "Fewer hallucinations",
              body: "Structured knowledge and clear agent logic lead to more accurate answers.",
            },
            {
              icon: "insight",
              title: "Full visibility",
              body: "Track what agents answer, what users ask, and where to improve.",
            },
            {
              icon: "shield",
              title: "Security and privacy",
              body: "Built for GDPR, logging, and role-based access.",
            },
          ],
        },
        proof: {
          title: "Documented impact for our customers",
          stats: [
            { value: "–55%", label: "Fewer customer service inquiries" },
            { value: "10,000+", label: "Inquiries handled per year" },
            { value: "24/7", label: "Availability" },
          ],
          quote: {
            text: "The chatbot has become a valuable new colleague that helps deliver better support, faster answers, and more efficient use of resources.",
            source: "Nordland County",
          },
        },
      },
      socialProof: {
        label: "Trusted by",
        quotes: [
          {
            quote: "A textbook example of how to do it right.",
            quoteSource: {
              name: "Top executive at",
              title: undefined,
              org: undefined,
              logoSrc: "/images/logos/ibm.svg",
              href: "https://www.ibm.com/new/product-blog/what-frontkom-learned-building-a-scalable-platform-with-ibm-for-norwegian-public-transport",
            },
          },
          {
            quote:
              "The chatbot has become a valuable new colleague that helps deliver better support, faster answers, and more efficient use of resources.",
            quoteSource: {
              name: "Nordland County",
              title: undefined,
              org: undefined,
              logoSrc: "/images/logos/nfk.svg",
              href: "https://www.ibm.com/new/product-blog/what-frontkom-learned-building-a-scalable-platform-with-ibm-for-norwegian-public-transport",
            },
          },
        ],
      },
      what: {
        title: "What is Tindre",
        subtitle:
          "Tindre is a platform for building, operating, and improving tailored AI agents — adapted to your organization’s data, systems, and real workflows.",
        productsTitle: "Modules",
        seeAllModules: "See all modules",
        useCases: [
          {
            icon: "support",
            title: "Customer support chatbot",
            description:
              "Offload your team with a 24/7 agent that handles inquiries, resolves issues, and escalates when needed.",
          },
          {
            icon: "shopping",
            title: "Guided shopping experiences",
            description:
              "Help users find the right product with personalized recommendations, clarification questions, and a seamless action flow.",
          },
          {
            icon: "search",
            title: "AI-powered site search",
            description:
              "Make your content easy to find with semantic search that understands intent and returns precise answers — not just matches.",
          },
          {
            icon: "automations",
            title: "Automations",
            description:
              "Automate repetitive tasks and complex cross-system processes with safe agent flows and clear control.",
          },
        ],
      },
      why: {
        title: "Why choose Tindre",
        flexibilityLabel: "Flexibility",
        flexibilityTitle: "Tailored experiences and integrations",
        flexibilityBody:
          "Tindre adapts to your needs — not the other way around. We build custom interfaces, connect existing systems, and set up agent flows that match real workflows.",
        flexibilityListTitle: "Typical integrations:",
        flexibilityIntegrations: [
          "Ticketing (Zendesk, SocialBoards, Salesforce)",
          "CRM and customer systems",
          "APIs and internal databases",
        ],
        qualityLabel: "Quality",
        qualityTitle: "Automated answer quality assurance",
        qualityBody:
          "Answers are monitored, measured, and improved continuously. You get insight into what agents answer, which sources are used, and where quality can be improved.",
        qualityListTitle: "The result:",
        qualityResults: ["More accurate answers", "Fewer errors and hallucinations", "Continuous learning from real usage"],
      },
      value: {
        title: "How Tindre creates measurable value",
        items: [
          "Improves customer experience (faster, better answers, 24/7 support)",
          "Increases sales and conversion",
          "Frees up employee time and boosts productivity",
          "Reduces operational costs",
          "Provides insight into customer needs and behavior",
          "Enables automation of complex processes",
        ],
      },
      caseStudies: {
        title: "Customer stories",
        seeAll: "See all",
        sectionQuote: {
          text: "A textbook example of how to do it right",
          sourcePrefix: "Top executive at",
          logoAlt: "IBM",
        },
        items: [
          {
            kicker: "Public sector",
            title: "Travel assistant for public transport in Nordland County",
            description:
              "A 24/7 travel assistant that answers bus and ferry questions using real-time timetables, disruptions, and policies—offloading the customer service team.",
            quote:
              "The chatbot has become a valuable new colleague that helps deliver better support, faster answers, and more efficient use of resources.",
            quoteSource: {
              org: "Nordland County",
              logoSrc: "/images/logos/nfk.svg",
              href: undefined,
            },
            imageAlt: "Reis Nordland travel assistant",
            imageSrc: "/images/stories/nordland-case.jpg",
            metrics: [
              { value: -55, kind: "percent", label: "Fewer customer inquiries" },
              { value: "10,000+", kind: "raw", label: "Inquiries per year" },
            ],
            cta: {
              label: "Read story",
              href: "https://www.ibm.com/new/product-blog/what-frontkom-learned-building-a-scalable-platform-with-ibm-for-norwegian-public-transport",
            },
          },
          {
            kicker: "Ecommerce",
            title: "Automating customer support for Norway’s largest academic bookstore",
            description:
              "A customer support agent that answers questions about orders, shipping, returns, and product availability—while helping customers find the right course literature. It escalates to a human when needed and takes pressure off the support team during peak periods.",
            imageAlt: "Customer support agent for Norway’s largest academic bookstore",
            imageSrc: "/images/stories/akademika-case.jpg",
            metrics: [
              { value: "10 000 000+ products", kind: "raw", label: "Updated weekly" },
            ],
            cta: {
              label: "Read story",
              href: "/stories",
            },
          },
        ],
      },
      demo: {
        title: "Want to see how Tindre could work for you?",
        description:
          "Book a demo and we’ll show how Tindre can be tailored to your needs — with real data and real examples.",
      },
    },
    pages: {
      references: { title: "Customer Stories" },
      integrations: { title: "Integrations" },
      modules: {
        title: "Modules",
        subtitle: "Explore the modules available in Tindre.",
        useCases: [
          {
            icon: "support",
            title: "Customer support chatbot",
            description:
              "Offload your team with a 24/7 agent that handles inquiries, resolves issues, and escalates when needed.",
          },
          {
            icon: "shopping",
            title: "Guided shopping experiences",
            description:
              "Help users find the right product with personalized recommendations, clarification questions, and a seamless action flow.",
          },
          {
            icon: "search",
            title: "AI-powered site search",
            description:
              "Make your content easy to find with semantic search that understands intent and returns precise answers — not just matches.",
          },
          {
            icon: "automations",
            title: "Automations",
            description:
              "Automate repetitive tasks and complex cross-system processes with safe agent flows and clear control.",
          },
          {
            icon: "sessions",
            title: "Sessions",
            description: "AI analysis and insights.",
          },
          {
            icon: "leads",
            title: "Leads",
            description:
              "Find leads from session content or by having your agent work to gain them.",
          },
          {
            icon: "recommendations",
            title: "Recommendation engine",
            description:
              "Recommend courses, hotels, or anything else with an interactive flow powered by your agents and data.",
          },
          {
            icon: "internalChat",
            title: "Internal chat",
            description: "Chat with your agents in the dashboard.",
          },
        ],
      },
      contact: { title: "Contact" },
      book: {
        title: "Book a demo",
        description: "Pick a time that works and we’ll chat.",
        backToHome: "Back",
        widget: {
          timeNeeded: "How much time do you need?",
          minutes30: "30 min",
          minutes60: "60 min",
          dateLabel: "Date",
          prevDay: "Previous day",
          nextDay: "Next day",
          openCalendar: "Open calendar",
          pickATime: "Pick a time",
          loading: "Loading available times…",
          noTimes: "No available times found for this period.",
          pickTimeFirst: "Pick a time first.",
          yourDetails: "Your details",
          firstName: "First name",
          lastName: "Last name",
          company: "Company",
          email: "Email",
          back: "Back",
          continue: "Continue",
          book: "Book demo",
          booking: "Booking…",
          bookedTitle: "Booked!",
          bookedBody: "Thanks — we’ve reserved the time.",
          errorTitle: "Something went wrong",
          tryAgain: "Try again",
        },
      },
    },
    notFound: {
      message: "Page not found.",
      backToHome: "Go to homepage",
    },
    footer: {
      language: "Language",
      navigation: "Navigation",
      rightsReserved: "All rights reserved.",
    },
    language: {
      no: "Norwegian",
      en: "English",
    },
  },
} satisfies Record<Locale, unknown>;

export function getMessages(locale: Locale) {
  return messages[locale] as (typeof messages)["en"];
}

