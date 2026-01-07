import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale });
  return buildMetadata({
    title: t('practical.title'),
    description: t('practical.description'),
    locale: params.locale,
  });
}

export default function PracticalInfoPage() {
  const t = useTranslations();
  const visa = t.raw('practical.visa') as string[];

  return (
    <Container className="space-y-10 py-16">
      <div className="section-sheen rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-soft">
        <SectionTitle
          eyebrow={t('navigation.practicalInfo')}
          title={t('practical.title')}
          description={t('practical.description')}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            {t('practical.visaTitle')}
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {visa.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            {t('practical.venueTitle')}
          </h3>
          <p className="text-sm text-slate-600">{t('practical.venue')}</p>
          <h4 className="mt-4 text-base font-semibold text-slate-900">
            {t('practical.cityTitle')}
          </h4>
          <p className="text-sm text-slate-600">{t('practical.city')}</p>
        </Card>
      </div>
      <Card className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">
          {t('practical.travelTitle')}
        </h3>
        <p className="text-sm text-slate-600">{t('practical.travel')}</p>
      </Card>
    </Container>
  );
}
