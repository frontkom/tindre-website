import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { hasLocale, type Locale } from "@/i18n/messages";

type SiteLayoutProps = LayoutProps<"/[lang]">;

export default async function SiteLayout({ children, params }: SiteLayoutProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) return children;

  return (
    <>
      <SiteHeader lang={lang as Locale} />
      {children}
      <SiteFooter lang={lang as Locale} />
    </>
  );
}

