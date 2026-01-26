import { redirect } from "next/navigation";

import { hasLocale } from "@/i18n/messages";

export default async function ReferencesPage({ params }: PageProps<"/[lang]/references">) {
  const { lang } = await params;
  if (!hasLocale(lang)) redirect("/no/stories");
  redirect(`/${lang}/stories`);
}

