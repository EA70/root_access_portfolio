import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

 
export async function generateMetadata(
  {params}:{params: Promise<{ locale: string }>;})
  : Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const titles: Record<string, string> = {
    fr: "Clement Anguandia - Ingénieur en Cybersécurité",
    en: "Clement Anguandia - Cybersecurity Engineer",
    de: "Clement Anguandia - Cybersecurity Ingenieur"
  };

  const descriptions: Record<string, string> = {
    fr: "Portfolio de Clément Anguandia, Spécialiste en Cybersécurité et Tests d'Intrusion. Expert dans la réalisation de pen-tests (Web, AD, Réseaux, Mobile) et l'analyse de vulnérabilités. Orienté vers l'audit de sécurité des systèmes critiques et l'amélioration continue de la posture de défense.",
    en: "Portfolio of Clément Anguandia, Cybersecurity & Penetration Testing Specialist. Focused on Web, Active Directory, Network, and Mobile application security. Delivering high-quality vulnerability assessments and security testing for complex enterprise infrastructures.",
    de: "Portfolio von Clément Anguandia, Spezialist für Cybersicherheit und Penetration Testing. Fokus auf Web-, Active Directory-, Netzwerk- und Mobile-Security. Erfahrung in der Durchführung von Schwachstellenanalysen und Sicherheitsüberprüfungen komplexer IT-Infrastrukturen."
  };

    const ogLocales: Record<string, string> = {
    fr: "fr_FR",
    en: "en_US",
    de: "de_DE"
  };

  const title = titles[locale] || titles.fr;
  const description = descriptions[locale] || descriptions.fr;

return {
    metadataBase: new URL("https://clementsec.com/"),
    title,
    description,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        de: "/de",
      },
    },

    openGraph: {
      type: "website",
      locale: ogLocales[locale] || "fr_FR",
      url: `https://clementsec.com//${locale}`,
      siteName: "Clement Anguandia",
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },

    icons: {
      icon: "/icon.png",
      apple: "/apple-touch-icon.png",
    },
  };



}

 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}