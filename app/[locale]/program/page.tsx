import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Accordion from '@/components/Accordion';
import Card from '@/components/Card';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale });
  return buildMetadata({
    title: t('program.title'),
    description: t('program.description'),
    locale: params.locale,
  });
}

export default function ProgramPage() {
  const t = useTranslations();
  const sessions = t.raw('program.sessions') as { title: string; axes: string[] }[];

  return (
    <Container className="space-y-10 py-16">
      <div className="section-sheen rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-soft">
        <SectionTitle
          eyebrow={t('navigation.program')}
          title={t('program.title')}
          description={t('program.description')}
        />
      </div>
      <div className="space-y-4">
        {sessions.map((session) => (
          <Accordion key={session.title} title={session.title}>
            <ul className="space-y-2">
              {session.axes.map((axis) => (
                <li key={axis} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary-500" />
                  <span>{axis}</span>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">
          {t('program.roundTable.title')}
        </h3>
        <p className="text-sm text-slate-600">{t('program.roundTable.chair')}</p>
        <p className="text-sm text-slate-600">{t('program.roundTable.description')}</p>
      </Card>
    </Container>
  );
}
