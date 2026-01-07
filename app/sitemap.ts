import type { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const baseUrl = 'https://www.owstc.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/program', '/fees', '/practical-info', '/call-for-papers', '/contact', '/privacy'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
    })),
  );
}
