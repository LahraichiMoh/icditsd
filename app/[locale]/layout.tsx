import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Cairo, Inter } from 'next/font/google';
import { locales } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cairo = Cairo({ subsets: ['arabic'], variable: '--font-arabic', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-latin', display: 'swap' });

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale });

  const navItems = [
    { label: t('navigation.home'), href: `/${locale}` },
    { label: t('navigation.program'), href: `/${locale}/program` },
    { label: t('navigation.fees'), href: `/${locale}/fees` },
    { label: t('navigation.practicalInfo'), href: `/${locale}/practical-info` },
    { label: t('navigation.callForPapers'), href: `/${locale}/call-for-papers` },
    { label: t('navigation.contact'), href: `/${locale}/contact` },
  ];

  const contacts = [
    { label: t('contact.cards.0.label'), value: t('contact.cards.0.value') },
    { label: t('contact.cards.1.label'), value: t('contact.cards.1.value') },
    { label: t('contact.cards.2.label'), value: t('contact.cards.2.value') },
  ];

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${cairo.variable} ${inter.variable}`}
    >
      <body className={locale === 'ar' ? 'font-[var(--font-arabic)]' : 'font-[var(--font-latin)]'}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header
            locale={locale}
            navItems={navItems}
            brand={t('brand')}
          />
          <main className="min-h-screen">{children}</main>
          <Footer brand={t('brand')} contacts={contacts} socialsLabel={t('footer.socials')} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
