import { notFound } from "next/navigation";

import { SimplePage } from "@/components/blocks/SimplePage";
import { getMessages, hasLocale } from "@/i18n/messages";

export default async function GovernmentSolutionPage({
  params,
}: PageProps<"/[lang]/solutions/government">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getMessages(lang);

  return <SimplePage title={m.nav.solutionsItems.government} description={m.common.comingSoon} />;
}

