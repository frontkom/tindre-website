import { notFound } from "next/navigation";

import { SimplePage } from "@/components/blocks/SimplePage";
import { getMessages, hasLocale } from "@/i18n/messages";

export default async function EcommerceSolutionPage({
  params,
}: PageProps<"/[lang]/solutions/ecommerce">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getMessages(lang);

  return <SimplePage title={m.nav.solutionsItems.ecommerce} description={m.common.comingSoon} />;
}

