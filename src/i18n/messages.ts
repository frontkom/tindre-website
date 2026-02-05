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
              href: "/historier/reis-nordland",
            },
          },
          {
            kicker: "Telekom",
            title: "Kundeservice som alltid er på jobb",
            description:
              "PlussMobil trengte raskt, pålitelig kundeservice uten å bygge opp stor bemanning. Frontkom leverte en AI-drevet kundeservicebot som ble satt i produksjon på få dager.",
            quote: "PlussMobils kundeservicebot har vært en suksess fra start.",
            quoteSource: {
              org: "Frank Bratland, CEO",
            },
            imageAlt: "PlussMobil kundeservicebot",
            imageSrc: "/images/stories/plussmobil-case.jpg",
            metrics: [
              { value: "1 000+", kind: "raw", label: "Samtaler per måned" },
            ],
            cta: {
              label: "Les kundehistorie",
              href: "/historier/plussmobil",
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
      caseStudies: {
        common: {
          backToStories: "Tilbake til kundehistorier",
          customerTitle: "Kunden",
          challengesTitle: "Utfordringer",
          solutionTitle: "Løsning",
          resultsTitle: "Resultater",
          successFactorsTitle: "Hva gjorde dette til en suksess",
          technicalArchitectureTitle: "Teknisk arkitektur",
        },
        plussmobil: {
          title: "PlussMobil: Kundeservice som alltid er på jobb",
          intro: "PlussMobil trengte raskt, pålitelig kundeservice uten å bygge opp stor bemanning. Frontkom leverte en AI-drevet kundeservicebot som ble satt i produksjon på få dager.",
          imageSrc: "/images/stories/plussmobil-case.jpg",
          imageAlt: "PlussMobil kundeservicebot",
          customer: "PlussMobil er en utfordrer i telekom-markedet, med rask vekst, lave priser og få ansatte.",
          challenges: [
            "Høy mengde kundehenvendelser på chat og telefon, også etter arbeidstid.",
            "Kompleks prismodell og mye detaljinformasjon som er krevende å formidle kort og korrekt.",
            "Begrenset supportkapasitet i en raskt voksende virksomhet.",
            "Behov for raske, presise svar og samtidig innsikt i hva kundene faktisk lurer på.",
            "Informasjon spredt over omfattende nettsider og dokumenter.",
          ],
          solution: [
            "Løsningen startet som en rask pilot hvor Frontkom satte opp en gratis test ved å indeksere PlussMobils nettsider og relevante PDF-er, og hvor innholdet ble oppdatert automatisk ved at nettstedet skrapes hver natt. For å minimere risiko i oppstarten valgte vi å unngå dype tekniske integrasjoner, og benyttet eksisterende chat som andrelinje for kompliserte saker.",
            "Systemet har klare regler for når samtaler skal eskaleres til menneskelig støtte, særlig ved pris- og kontraktsrelaterte spørsmål. Drift og kvalitetssikring ble organisert fra dag én, med ukentlige gjennomganger av samtaler, kontinuerlig innsamling av tommel-opp/ned-feedback, og manuell gjennomgang av svar som kunne forbedres. All brukerdata som brukes til innsikt er anonymisert før analyse for å ivareta personvern.",
            "I implementasjonsfasen fokuserte vi på praktiske grep som gav rask verdi. Datainnsamling skjer daglig ved at nettsted og PDF-er skrapes, og relevante eksterne kilder som konkurrentpriser ble lagt inn for å gi et korrekt kunnskapsgrunnlag. Den begrensede integrasjonsomfanget og et sterkt fokus på presise systeminstruksjoner gjorde det mulig å gå fra idé til live MVP i løpet av dager.",
            "Overvåking omfatter måling av antall samtaler, løsningsrate og brukertilfredshet, og ukentlige møter sikrer at svar og instruksjoner justeres raskt ut fra faktisk brukeratferd. Rollen for ansvar og eskalering er tydelig definert, slik at sensitive temaer alltid behandles med ekstra validering eller menneskelig oppfølging.",
          ],
          results: [
            "I den tidlige driftsfasen håndterte boten omtrent 1 000 samtaler per måned, og flertallet av brukerne ga tommel opp i tilbakemeldingene, noe som indikerer høy opplevd nytte og tilfredshet.",
            "Dialogdataene har gitt konkrete, handlingsrettede innspill til hvilke sider og formuleringer på nettstedet som skaper forvirring, hva brukerne oppfatter som komplisert, og hvilke funksjoner de etterspør. Disse innsiktene har vist seg å være like verdifulle for PlussMobil som selve automatiseringen, fordi de muliggjør målrettede forbedringer i både innhold og produkt.",
          ],
          quote: {
            text: "PlussMobils kundeservicebot har vært en suksess fra start.",
            source: "Frank Bratland, CEO",
          },
          successFactors: [
            "Start i det små og lær raskt — pilot som kunne måles og justeres.",
            "Strenge systeminstruksjoner for å redusere risiko for feilinformasjon.",
            "Daglig oppdatering av kildedata slik at svarene holdt seg relevante.",
            "Enkle eskaleringsveier til menneskelig support.",
            "Fokus på innsikt: ikke bare svar, men data om hva kundene faktisk spør om.",
          ],
          metrics: [
            { value: "1 000+", kind: "raw", label: "Samtaler per måned" },
          ],
        },
        reisNordland: {
          title: "Reis Nordland: Brukerfokusert reiseinformasjon med AI",
          intro: "Nordland fylkeskommune ønsket å gjøre det enklere for både innbyggere og besøkende å finne trygg og tydelig reiseinformasjon — når som helst på døgnet og på flere språk. Målet var å gi raske, forståelige svar og samtidig sikre at offentlig informasjon forvaltes på en trygg og sporbar måte.",
          imageSrc: "/images/stories/nordland-case.jpg",
          imageAlt: "Reis Nordland reiseassistent",
          customer: "Nordland fylkeskommune ønsket å gjøre det enklere for både innbyggere og besøkende å finne trygg og tydelig reiseinformasjon — når som helst på døgnet og på flere språk.",
          challenges: [
            "Innbyggerne og de som besøker Nordland slet ofte med å finne rask, tydelig og pålitelig reiseinformasjon når de trengte det.",
            "Informasjonen lå spredt i ulike dokumenter og nettsider.",
            "Rutetider og trafikkendringer skjer ofte, og mange brukere snakker ikke norsk.",
            "Kundeservice hadde ikke kapasitet til å svare døgnet rundt, noe som ga lange ventetider og frustrasjon.",
            "Løsningen måtte leve opp til strenge krav rundt personvern, lagring innenfor EØS og universell utforming.",
          ],
          solution: [
            "Frontkom leverte en AI-drevet chatbot basert på Frontkom AI Agent Platform som kan svare på naturlige språkspørsmål som «Når går neste ferge fra Bodø?» eller «Er rute 300 forsinket?», og den gjør dette ved å kombinere verifiserte interne kilder med sanntidsdata fra EnTur og eksterne tjenester.",
            "Løsningen omfatter bruk av kun verifiserte kilder fra fylkeskommunens nettsider og dokumenter, strukturert for trygg bruk. Integrasjon med sanntidsdata fra Entur via API for rute- og trafikkoppdateringer. Flerspråklig støtte (norsk, engelsk, samisk m.fl.). GDPR-kompatibel databehandling, all lagring i EØS.",
            "Brukervennlig knappestyrt chatfrontend for publikum, samt administrasjonsmodul for redaktører og superbrukere. Dashboard for innsikt i bruk og kostnader, samt mekanismer for kontinuerlig forbedring basert på samtaleinnsikt. Universell utforming i samsvar med WCAG 2.1 AA.",
            "Fagfolk fra fylkeskommunen var involvert hele veien, slik at botens språk og svar sjekkes mot fagkilder og brukernes faktiske spørsmål. I tillegg la vi inn overvåking og rutiner for kvalitetssikring slik at ansatte løpende kan vurdere og forbedre svarene.",
          ],
          technicalArchitecture: [
            "Frontkom leverte en modulær gen-AI-plattform bygget i et teknologisamarbeid med IBM og med nøkkelkomponenter fra åpen kildekode. Løsningen holder svarene forankret i fakta og repeterbare ved å bruke deterministiske verktøy for å hente og strukturere data, i stedet for å la fri-form LLM-output styre presentasjonen.",
            "Frontkoms AI agent platform orkestrerer modellkjøring, datakilder og admin-verktøy, og er designet for å være observerbar, versjonert og styrbar. Modellen som brukes for Reis Nordland var Gemini 3.0 Flash, men arkitekturen gjør det enkelt å bytte modeller eller verktøy uten å påvirke produksjonsstabiliteten.",
            "Alle samtaledata, telemetri og konfigurasjon versjoneres og persisteres i IBM Cloud Databases for PostgreSQL, hvilket gir både skalerbarhet og full revisjonssporing. Nøkkelverktøyene (f.eks. PlanTrip og FindPlace) leverer strukturerte payloads som forhindrer formaterings- og faktuelle feil.",
          ],
          results: [
            "Effektene kom raskt og tydelig: allerede fire uker etter lansering var antallet henvendelser til kundesenteret redusert med 37 prosent sammenlignet med samme periode året før. Etter seks uker var reduksjonen 55 prosent.",
            "Samtidig har svartiden for de manuelle sakene blitt kortere — omtrent én dag raskere til tross for færre ressurser.",
            "På seks uker hadde boten gjennomført 3 122 unike samtaler og sendt 21 900 meldinger. Totalt har dette ført til betydelig raskere svar for brukerne, økt tilgjengelighet gjennom døgnåpen, flerspråklig veiledning, og en mer effektiv ressursbruk i kundeservice.",
            "Chatboten fungerer nå som en ny kollega som håndterer mange av de enkle spørsmålene, frigjør tid for ansatte og gir bedre service for innbyggere og besøkende.",
          ],
          quote: {
            text: "Chatboten har blitt en verdifull ny kollega som bidrar til bedre kundeservice, raskere svar og mer effektiv ressursbruk.",
            source: "Nordland fylkeskommune",
          },
          successFactors: [
            "Klar målsetting og måling: tydelig mål om å redusere henvendelser og konkrete KPI-er gjorde det mulig å måle rask effekt.",
            "Brukersentrert design: knappestyrt, visuell UX som reduserer friksjon og fungerer for både lokalbefolkning, samiske brukere og turister.",
            "Tett faglig samarbeid: løpende involvering fra fylkeskommunens eksperter sikret faglig korrekte og relevante svar.",
            "Sanntidsintegrasjon: kobling mot Entur ga oppdatert ruteinformasjon, noe brukerne stoler på.",
            "Drift og governance: EØS-lagring, revisjonsspor og redaktørverktøy gjorde løsningen trygg og operasjonelt enkel å vedlikeholde.",
            "Kontinuerlig kvalitetskontroll: rutiner for å overvåke svarkvalitet og justere modeller og instruksjoner ga rask forbedring og stabil ytelse.",
          ],
          metrics: [
            { value: -55, kind: "percent", label: "Færre henvendelser til kundesenter" },
            { value: "3 122", kind: "raw", label: "Samtaler på 6 uker" },
          ],
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
      privacySettings: "Juster personverninnstillinger",
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
              href: "/stories/reis-nordland",
            },
          },
          {
            kicker: "Telecom",
            title: "Customer service that never sleeps",
            description:
              "PlussMobil needed fast, reliable customer service without building a large support team. Frontkom delivered an AI-powered customer service bot that went live in just a few days.",
            quote: "PlussMobil's customer service bot has been a success from the start.",
            quoteSource: {
              org: "Frank Bratland, CEO",
            },
            imageAlt: "PlussMobil customer service bot",
            imageSrc: "/images/stories/plussmobil-case.jpg",
            metrics: [
              { value: "1,000+", kind: "raw", label: "Conversations per month" },
            ],
            cta: {
              label: "Read story",
              href: "/stories/plussmobil",
            },
          },
          {
            kicker: "Ecommerce",
            title: "Automating customer support for Akademika",
            description:
              "A customer support agent that answers questions about orders, shipping, returns, and product availability — while helping customers find the right course literature. It escalates to a human when needed and takes pressure off the support team during peak periods.",
            imageAlt: "Customer support agent for Norway's largest academic bookstore",
            imageSrc: "/images/stories/akademika-case.jpg",
            metrics: [
              { value: "10,000,000+ products", kind: "raw", label: "Updated weekly" },
            ],
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
      caseStudies: {
        common: {
          backToStories: "Back to customer stories",
          customerTitle: "The Customer",
          challengesTitle: "Challenges",
          solutionTitle: "Solution",
          resultsTitle: "Results",
          successFactorsTitle: "What Made This a Success",
          technicalArchitectureTitle: "Technical Architecture",
        },
        plussmobil: {
          title: "PlussMobil: Customer Service That Never Sleeps",
          intro: "PlussMobil needed fast, reliable customer service without building a large support team. Frontkom delivered an AI-powered customer service bot that went live in just a few days.",
          imageSrc: "/images/stories/plussmobil-case.jpg",
          imageAlt: "PlussMobil customer service bot",
          customer: "PlussMobil is a challenger in the telecom market, with rapid growth, low prices, and a small team.",
          challenges: [
            "High volume of customer inquiries via chat and phone, including after business hours.",
            "Complex pricing model and detailed information that is difficult to communicate concisely and accurately.",
            "Limited support capacity in a rapidly growing business.",
            "Need for fast, accurate answers while gaining insight into what customers are actually asking about.",
            "Information spread across extensive websites and documents.",
          ],
          solution: [
            "The solution started as a rapid pilot where Frontkom set up a free test by indexing PlussMobil's websites and relevant PDFs, with content automatically updated by scraping the website every night. To minimize risk at launch, we avoided deep technical integrations and used existing chat as a second line for complex cases.",
            "The system has clear rules for when conversations should be escalated to human support, especially for price and contract-related questions. Operations and quality assurance were organized from day one, with weekly conversation reviews, continuous collection of thumbs-up/down feedback, and manual review of answers that could be improved. All user data used for insights is anonymized before analysis to protect privacy.",
            "During implementation, we focused on practical steps that delivered quick value. Data collection happens daily by scraping websites and PDFs, and relevant external sources like competitor prices were added to provide an accurate knowledge base. The limited integration scope and strong focus on precise system instructions made it possible to go from idea to live MVP in days.",
            "Monitoring includes measuring conversation volume, resolution rate, and user satisfaction, and weekly meetings ensure answers and instructions are quickly adjusted based on actual user behavior. Responsibility and escalation roles are clearly defined, so sensitive topics are always handled with extra validation or human follow-up.",
          ],
          results: [
            "In the early operational phase, the bot handled approximately 1,000 conversations per month, and the majority of users gave thumbs up in feedback, indicating high perceived value and satisfaction.",
            "The conversation data has provided concrete, actionable insights into which pages and wording on the website cause confusion, what users find complicated, and which features they request. These insights have proven as valuable for PlussMobil as the automation itself, because they enable targeted improvements in both content and product.",
          ],
          quote: {
            text: "PlussMobil's customer service bot has been a success from the start.",
            source: "Frank Bratland, CEO",
          },
          successFactors: [
            "Start small and learn fast — a pilot that could be measured and adjusted.",
            "Strict system instructions to reduce the risk of misinformation.",
            "Daily updates of source data to keep answers relevant.",
            "Simple escalation paths to human support.",
            "Focus on insights: not just answers, but data about what customers are actually asking.",
          ],
          metrics: [
            { value: "1,000+", kind: "raw", label: "Conversations per month" },
          ],
        },
        reisNordland: {
          title: "Reis Nordland: User-Focused Travel Information with AI",
          intro: "Nordland County wanted to make it easier for both residents and visitors to find safe and clear travel information — at any time of day and in multiple languages. The goal was to provide fast, understandable answers while ensuring public information is managed in a safe and traceable way.",
          imageSrc: "/images/stories/nordland-case.jpg",
          imageAlt: "Reis Nordland travel assistant",
          customer: "Nordland County wanted to make it easier for both residents and visitors to find safe and clear travel information — at any time of day and in multiple languages.",
          challenges: [
            "Residents and visitors to Nordland often struggled to find fast, clear, and reliable travel information when they needed it.",
            "Information was spread across various documents and websites.",
            "Schedules and traffic changes happen frequently, and many users don't speak Norwegian.",
            "Customer service didn't have capacity to answer around the clock, leading to long wait times and frustration.",
            "The solution had to meet strict requirements for privacy, EEA storage, and universal design.",
          ],
          solution: [
            "Frontkom delivered an AI-powered chatbot based on Frontkom AI Agent Platform that can answer natural language questions like 'When does the next ferry leave from Bodø?' or 'Is route 300 delayed?', combining verified internal sources with real-time data from EnTur and external services.",
            "The solution includes use of only verified sources from the county's websites and documents, structured for safe use. Integration with real-time data from Entur via API for route and traffic updates. Multilingual support (Norwegian, English, Sami, etc.). GDPR-compliant data processing, all storage in the EEA.",
            "User-friendly button-driven chat frontend for the public, plus an admin module for editors and super users. Dashboard for insights into usage and costs, plus mechanisms for continuous improvement based on conversation insights. Universal design in compliance with WCAG 2.1 AA.",
            "Subject matter experts from the county were involved throughout, so the bot's language and answers are checked against expert sources and users' actual questions. We also added monitoring and quality assurance routines so staff can continuously evaluate and improve answers.",
          ],
          technicalArchitecture: [
            "Frontkom delivered a modular gen-AI platform built in a technology partnership with IBM and with key components from open source. The solution keeps answers grounded in facts and repeatable by using deterministic tools to fetch and structure data, instead of letting free-form LLM output drive the presentation.",
            "Frontkom's AI agent platform orchestrates model execution, data sources, and admin tools, and is designed to be observable, versioned, and controllable. The model used for Reis Nordland was Gemini 3.0 Flash, but the architecture makes it easy to swap models or tools without affecting production stability.",
            "All conversation data, telemetry, and configuration is versioned and persisted in IBM Cloud Databases for PostgreSQL, providing both scalability and full audit trails. Key tools (e.g., PlanTrip and FindPlace) deliver structured payloads that prevent formatting and factual errors.",
          ],
          results: [
            "The effects came quickly and clearly: just four weeks after launch, the number of inquiries to the customer center was reduced by 37 percent compared to the same period the previous year. After six weeks, the reduction was 55 percent.",
            "At the same time, response time for manual cases has become shorter — about one day faster despite fewer resources.",
            "In six weeks, the bot had conducted 3,122 unique conversations and sent 21,900 messages. Overall, this has led to significantly faster responses for users, increased availability through 24/7 multilingual guidance, and more efficient use of customer service resources.",
            "The chatbot now functions as a new colleague that handles many of the simple questions, frees up time for employees, and provides better service for residents and visitors.",
          ],
          quote: {
            text: "The chatbot has become a valuable new colleague that helps deliver better support, faster answers, and more efficient use of resources.",
            source: "Nordland County",
          },
          successFactors: [
            "Clear goals and measurement: a clear goal to reduce inquiries and concrete KPIs made it possible to measure rapid impact.",
            "User-centered design: button-driven, visual UX that reduces friction and works for locals, Sami users, and tourists alike.",
            "Close expert collaboration: ongoing involvement from the county's experts ensured professionally correct and relevant answers.",
            "Real-time integration: connection to Entur provided up-to-date route information that users trust.",
            "Operations and governance: EEA storage, audit trails, and editor tools made the solution safe and operationally easy to maintain.",
            "Continuous quality control: routines for monitoring answer quality and adjusting models and instructions led to rapid improvement and stable performance.",
          ],
          metrics: [
            { value: -55, kind: "percent", label: "Fewer customer center inquiries" },
            { value: "3,122", kind: "raw", label: "Conversations in 6 weeks" },
          ],
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
      privacySettings: "Adjust privacy settings",
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

