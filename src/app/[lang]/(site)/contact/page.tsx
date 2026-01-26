import { notFound } from "next/navigation";

import { SimplePage } from "@/components/blocks/SimplePage";
import { getMessages, hasLocale } from "@/i18n/messages";

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getMessages(lang);

  return <SimplePage title={m.pages.contact.title} description={m.common.comingSoon} />;
}

