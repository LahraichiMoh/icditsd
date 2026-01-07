import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-slate-900">
        <span>{title}</span>
        <ChevronDown className="h-5 w-5 text-slate-500 transition group-open:rotate-180" />
      </summary>
      <div className="mt-4 space-y-3 text-sm text-slate-600 sm:text-base">
        {children}
      </div>
    </details>
  );
}
