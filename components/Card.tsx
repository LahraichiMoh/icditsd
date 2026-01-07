import type { ReactNode } from 'react';
import clsx from 'clsx';

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  );
}
