import { notFound } from "next/navigation";

import { SimplePage } from "@/components/blocks/SimplePage";
import { getMessages, hasLocale } from "@/i18n/messages";

export default async function CustomerSupportSolutionPage({
  params,
}: PageProps<"/[lang]/solutions/customer-support">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getMessages(lang);

  return <SimplePage title={m.nav.solutionsItems.customerSupport} description={m.common.comingSoon} />;
}

