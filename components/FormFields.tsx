'use client';

import type { ReactNode } from 'react';

const baseField =
  'w-full rounded-xl border border-brand-100 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink-muted shadow-sm transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200';

type FieldWrapProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
};

export function Field({ label, htmlFor, required, error, children, className = '' }: FieldWrapProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required ? <span className="text-red-500" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={baseField} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${baseField} min-h-[110px] resize-y`} />;
}

export function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <select {...props} className={baseField}>
      {children}
    </select>
  );
}

export function SuccessMessage({
  title,
  message,
  note,
}: {
  title: string;
  message: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-leaf-100 bg-leaf-50 p-8 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-leaf-500 text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="mt-4 text-xl text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{message}</p>
      {note ? (
        <p className="mx-auto mt-5 max-w-sm border-t border-leaf-100 pt-4 text-xs leading-relaxed text-ink-muted">
          {note}
        </p>
      ) : null}
    </div>
  );
}

export const gradeOptions = [
  'Nursery / Playgroup',
  'Junior KG',
  'Senior KG',
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
];

export const branchOptions = [
  'L. P. Savani School (Palanpor)',
  'L. P. Savani Vidhyabhavan (Adajan)',
  'L. P. Savani International (Pal)',
  'L. P. Savani Academy (Vesu)',
  'L. P. Savani Riverside School (Dabholi)',
  'L. P. Savani Sanskar Valley (Mota Varachha)',
];
