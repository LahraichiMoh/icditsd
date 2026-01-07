import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale });
  return buildMetadata({
    title: t('fees.title'),
    description: t('fees.description'),
    locale: params.locale,
  });
}

export default function FeesPage() {
  const t = useTranslations();
  const discounts = t.raw('fees.discounts') as string[];
  const included = t.raw('fees.included') as string[];

  return (
    <Container className="space-y-10 py-16">
      <SectionTitle
        eyebrow={t('navigation.fees')}
        title={t('fees.title')}
        description={t('fees.description')}
      />
      <Card className="space-y-3">
        <Badge>{t('fees.note')}</Badge>
        <h3 className="text-2xl font-semibold text-slate-900">{t('fees.price')}</h3>
        <p className="text-sm text-slate-600">{t('fees.note')}</p>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            {t('fees.discountsTitle')}
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {discounts.map((discount) => (
              <li key={discount} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                <span>{discount}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            {t('fees.includedTitle')}
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Container>
  );
}
