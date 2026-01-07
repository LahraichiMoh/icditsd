import type { ReactNode } from 'react';
import clsx from 'clsx';

export default function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('space-y-3', className)}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
