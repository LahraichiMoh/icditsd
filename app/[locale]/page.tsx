import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { buildMetadata } from '@/lib/metadata';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale });
  return buildMetadata({
    title: t('hero.title'),
    description: t('about.description'),
    locale: params.locale,
  });
}

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const objectives = t.raw('objectives.items') as string[];
  const participants = t.raw('participants.items') as string[];
  const advantages = t.raw('advantages.items') as string[];
  const sessions = t.raw('programPreview.sessions') as string[];

  return (
    <div className="space-y-20 pb-20">
      <section className="gradient-bg">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge>{t('hero.edition')}</Badge>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-slate-600">{t('hero.theme')}</p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span>{t('hero.date')}</span>
              <span>•</span>
              <span>{t('hero.location')}</span>
              <span>•</span>
              <span>{t('hero.venue')}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={`/${locale}/contact`} variant="primary">
                {t('hero.ctaPrimary')}
              </Button>
              <Button href={`/${locale}/contact`} variant="secondary">
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder-hero.svg"
              alt="Conference hero illustration"
              width={1200}
              height={720}
              className="w-full rounded-3xl border border-slate-200 bg-white shadow-soft"
            />
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow={t('about.eyebrow')}
            title={t('about.title')}
            description={t('about.description')}
          />
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow={t('objectives.eyebrow')}
            title={t('objectives.title')}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((item, index) => (
              <Card key={item} className="flex gap-4">
                <div className="text-lg font-semibold text-primary-600">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-sm text-slate-600 sm:text-base">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow={t('participants.eyebrow')}
            title={t('participants.title')}
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {participants.map((item, index) => (
              <Card key={item}>
                <div className="text-sm font-semibold text-primary-600">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="mt-3 text-sm text-slate-600">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <SectionTitle
              eyebrow={t('programPreview.eyebrow')}
              title={t('programPreview.title')}
              description={t('programPreview.description')}
            />
            <ul className="space-y-3 text-sm text-slate-600">
              {sessions.map((session) => (
                <li key={session} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  <span>{session}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-primary-600">{t('programPreview.roundTable')}</p>
          </div>
          <Card className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">{t('programPreview.title')}</h3>
            <p className="text-sm text-slate-600">{t('programPreview.description')}</p>
            <Button href={`/${locale}/program`} variant="primary">
              {t('programPreview.button')}
            </Button>
          </Card>
        </Container>
      </section>

      <section>
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="space-y-3">
            <Badge>{t('feesPreview.eyebrow')}</Badge>
            <h3 className="text-xl font-semibold text-slate-900">{t('feesPreview.title')}</h3>
            <p className="text-sm text-slate-600">{t('feesPreview.price')}</p>
            <p className="text-sm text-slate-600">{t('feesPreview.earlyBird')}</p>
            <p className="text-sm text-slate-600">{t('feesPreview.groupOffers')}</p>
            <Button href={`/${locale}/fees`} variant="primary">
              {t('feesPreview.button')}
            </Button>
          </Card>
          <div className="space-y-6">
            <SectionTitle
              eyebrow={t('advantages.eyebrow')}
              title={t('advantages.title')}
            />
            <div className="grid gap-4 md:grid-cols-2">
              {advantages.map((advantage) => (
                <Card key={advantage}>
                  <p className="text-sm text-slate-600">{advantage}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionTitle
            eyebrow={t('partners.eyebrow')}
            title={t('partners.title')}
            description={t('partners.description')}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="flex items-center justify-center p-10 text-sm text-slate-400">
                Logo Placeholder
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="register">
        <Container>
          <Card className="flex flex-col items-center gap-6 text-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-slate-900">{t('cta.title')}</h3>
              <p className="text-sm text-slate-600">{t('cta.description')}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={`/${locale}/contact`} variant="primary">
                {t('cta.primary')}
              </Button>
              <Button href={`/${locale}/contact`} variant="secondary">
                {t('cta.secondary')}
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
