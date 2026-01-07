import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/i18n';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) {
    return { messages: {} };
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
