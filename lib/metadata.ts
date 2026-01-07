import type { Metadata } from 'next';

export function buildMetadata({
  title,
  description,
  locale,
}: {
  title: string;
  description: string;
  locale: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
    },
  };
}
