import type { Metadata } from "next";
import { Crimson_Text, DM_Sans, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getMessages, hasLocale, locales } from "@/i18n/messages";

import "../globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tindre – Skreddersydde AI-agenter",
  description:
    "Bygg AI-agenter for kundeservice, salg, datainnsikt og automatisering – tilpasset virksomheten din og driftet på norsk infrastruktur.",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LangLayoutProps = LayoutProps<"/[lang]">;

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  // Touch messages to ensure locale is valid and typed.
  getMessages(lang);

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        {/* Usercentrics Consent Management Platform - must load before other third-party scripts */}
        <Script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="UikXCHujuxnLDg"
          strategy="beforeInteractive"
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZ22FWJ4');`}
        </Script>
      </head>
      <body
        className={`${dmSans.variable} ${geistMono.variable} ${crimsonText.variable} antialiased bg-white text-black`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZ22FWJ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

