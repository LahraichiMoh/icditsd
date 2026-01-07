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
    title: t('callForPapers.title'),
    description: t('callForPapers.description'),
    locale: params.locale,
  });
}

export default function CallForPapersPage() {
  const t = useTranslations();

  return (
    <Container className="space-y-10 py-16">
      <SectionTitle
        eyebrow={t('navigation.callForPapers')}
        title={t('callForPapers.title')}
        description={t('callForPapers.description')}
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            {t('callForPapers.emailLabel')}
          </h3>
          <p className="text-sm text-slate-600">{t('callForPapers.email')}</p>
        </Card>
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            {t('callForPapers.deadlineLabel')}
          </h3>
          <p className="text-sm text-slate-600">{t('callForPapers.deadline')}</p>
        </Card>
      </div>
    </Container>
  );
}
