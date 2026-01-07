'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales } from '@/i18n';

const labels: Record<string, string> = {
  ar: 'العربية',
  en: 'English',
  fr: 'Français',
};

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const rest = segments.slice(2).join('/');

  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
      {locales.map((locale) => {
        const href = `/${locale}${rest ? `/${rest}` : ''}`;
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={href}
            className={`rounded-full px-3 py-1 transition ${
              isActive
                ? 'bg-primary-600 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            {labels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
