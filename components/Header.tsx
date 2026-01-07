import Link from 'next/link';
import Container from './Container';
import LanguageSwitcher from './LanguageSwitcher';

export type NavItem = {
  label: string;
  href: string;
};

export default function Header({
  locale,
  navItems,
  brand,
}: {
  locale: string;
  navItems: NavItem[];
  brand: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
            OWS
          </div>
          <div>
            <Link href={`/${locale}`} className="text-sm font-semibold text-slate-900">
              {brand}
            </Link>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-primary-50 hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher currentLocale={locale} />
      </Container>
    </header>
  );
}
