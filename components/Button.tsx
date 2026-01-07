import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export default function Button({
  className,
  variant = 'primary',
  ...props
}: ComponentPropsWithoutRef<'a'> & { variant?: 'primary' | 'secondary' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-sm hover:from-primary-700 hover:to-primary-600'
      : 'border border-slate-300 bg-white text-slate-700 hover:border-primary-300 hover:text-primary-600';
  return <a className={clsx(base, styles, className)} {...props} />;
}
