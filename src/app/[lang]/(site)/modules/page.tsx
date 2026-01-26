import { notFound } from "next/navigation";

import { Container } from "@/components/blocks/Container";
import { SectionSubtitle } from "@/components/blocks/SectionSubtitle";
import { SectionTitle } from "@/components/blocks/SectionTitle";
import { UseCasesGrid } from "@/components/UseCasesGrid";
import { getMessages, hasLocale } from "@/i18n/messages";

export default async function ModulesPage({ params }: PageProps<"/[lang]/modules">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getMessages(lang);

  return (
    <main>
      <section className="bg-zinc-50 py-24 sm:py-28">
        <Container>
          <SectionTitle>{m.pages.modules.title}</SectionTitle>
          <SectionSubtitle>{m.pages.modules.subtitle}</SectionSubtitle>
          <UseCasesGrid items={m.pages.modules.useCases} />
        </Container>
      </section>
    </main>
  );
}

