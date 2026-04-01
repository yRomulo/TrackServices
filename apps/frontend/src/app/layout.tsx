import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { trackServicesContact } from "@/components/sections/contactData";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow"
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed"
});

const siteDescription =
  "Soluções em infraestrutura de TI, suporte técnico, NOC e segurança eletrônica para empresas do RJ.";

export const metadata: Metadata = {
  metadataBase: new URL(trackServicesContact.website),
  title: {
    default: "Track Services | Infraestrutura de TI",
    template: "%s | Track Services"
  },
  description: siteDescription,
  applicationName: "Track Services",
  authors: [{ name: "Track Services" }],
  creator: "Track Services",
  publisher: "Track Services",
  keywords: ["Track Services", "infraestrutura de TI", "suporte técnico", "NOC", "segurança eletrônica", "CFTV", "controle de acesso", "Rio de Janeiro"],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: trackServicesContact.website,
    siteName: "Track Services",
    title: "Track Services | Infraestrutura de TI",
    description: siteDescription
  },
  twitter: {
    card: "summary",
    title: "Track Services | Infraestrutura de TI",
    description: siteDescription
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Track Services",
      url: trackServicesContact.website,
      email: trackServicesContact.email,
      telephone: "+55 22 3324-4773",
      sameAs: [
        trackServicesContact.social.instagram,
        trackServicesContact.social.facebook,
        trackServicesContact.social.linkedin
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55 22 3324-4773",
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: ["pt-BR"]
        }
      ]
    },
    {
      "@type": "WebSite",
      name: "Track Services",
      url: trackServicesContact.website,
      inLanguage: "pt-BR"
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E8621A]"
        >
          Pular para o conteúdo
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
