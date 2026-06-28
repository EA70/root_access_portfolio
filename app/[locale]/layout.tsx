import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

 
export async function generateMetadata(
  {params}:{params: Promise<{ locale: string }>;})
  : Promise<Metadata> {
  const { locale } = await params;

  // la locale est valide ???
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const titles: Record<string, string> = {
    fr: "Clement Anguandia - Ingénieur en Cybersécurité",
    en: "Clement Anguandia - Cybersecurity Engineer",
    de: "Clement Anguandia - Cybersecurity Ingenieur"
  };

  const descriptions: Record<string, string> = {
    fr: "Portfolio de Clement Anguandia...",
    en: "Portfolio of Clement Anguandia...",
    de: "Portfolio von Clement Anguandia..."
  };

  return {
    title: titles[locale] || titles.fr,
    description: descriptions[locale] || descriptions.fr
  };
}

// 2. Correction de LocaleLayout : params doit être une Promise
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

  // 3. IMPORTANT : Passer explicitement la locale à getMessages
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