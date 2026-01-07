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
    title: t('contact.title'),
    description: t('contact.description'),
    locale: params.locale,
  });
}

export default function ContactPage() {
  const t = useTranslations();
  const cards = t.raw('contact.cards') as { label: string; value: string }[];

  return (
    <Container className="space-y-10 py-16">
      <SectionTitle
        eyebrow={t('navigation.contact')}
        title={t('contact.title')}
        description={t('contact.description')}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.label} className="space-y-2">
            <p className="text-sm font-semibold text-slate-900">{card.label}</p>
            <p className="text-sm text-slate-600">{card.value}</p>
          </Card>
        ))}
      </div>
      <Card>
        <form
          className="grid gap-4"
          action="mailto:info@owstc.net"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              {t('contact.form.name')}
              <input
                name="name"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {t('contact.form.email')}
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {t('contact.form.phone')}
              <input
                name="phone"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {t('contact.form.country')}
              <input
                name="country"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
          </div>
          <label className="text-sm font-medium text-slate-700">
            {t('contact.form.organization')}
            <input
              name="organization"
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            {t('contact.form.message')}
            <textarea
              name="message"
              rows={5}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            {t('contact.form.submit')}
          </button>
        </form>
      </Card>
    </Container>
  );
}
