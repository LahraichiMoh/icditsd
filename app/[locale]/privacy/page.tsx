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
    title: t('privacy.title'),
    description: t('privacy.description'),
    locale: params.locale,
  });
}

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <Container className="space-y-8 py-16">
      <div className="section-sheen rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-soft">
        <SectionTitle
          eyebrow={t('navigation.privacy')}
          title={t('privacy.title')}
          description={t('privacy.description')}
        />
      </div>
      <Card>
        <p className="text-sm text-slate-600">{t('privacy.description')}</p>
      </Card>
    </Container>
  );
}
