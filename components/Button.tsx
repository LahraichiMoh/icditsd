import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export default function Button({
  className,
  variant = 'primary',
  ...props
}: ComponentPropsWithoutRef<'a'> & { variant?: 'primary' | 'secondary' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition';
  const styles =
    variant === 'primary'
      ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-700'
      : 'border border-slate-300 bg-white text-slate-700 hover:border-slate-400';
  return <a className={clsx(base, styles, className)} {...props} />;
}
