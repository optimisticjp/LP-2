'use client';

import { useState } from 'react';
import {
  Field,
  Select,
  SuccessMessage,
  TextInput,
  branchOptions,
  gradeOptions,
} from '@/components/FormFields';

type Errors = Partial<Record<'parentName' | 'phone' | 'visitDate', string>>;

export default function TourForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  // Minimum selectable date is today.
  const today = new Date().toISOString().split('T')[0];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const parentName = String(data.get('parentName') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const visitDate = String(data.get('visitDate') ?? '').trim();

    const next: Errors = {};
    if (!parentName) next.parentName = 'Please enter your name.';
    if (!/^[0-9+\s-]{10,15}$/.test(phone)) next.phone = 'Please enter a valid phone number.';
    if (!visitDate) next.visitDate = 'Please choose a preferred date.';

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitting(true);
      setTimeout(() => setSubmitted(true), 700);
    }
  }

  if (submitted) {
    return (
      <SuccessMessage
        title="Thank you. Our admissions team will contact you shortly."
        message="We have received your campus tour request. The team will call to confirm a convenient time to show you around in person."
        note="This is a prototype. In the final version, enquiries can go to email, WhatsApp, CRM, or dashboard."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field label="Parent name" htmlFor="tour-parentName" required error={errors.parentName}>
        <TextInput id="tour-parentName" name="parentName" type="text" autoComplete="name" placeholder="Your full name" />
      </Field>
      <Field label="Phone number" htmlFor="tour-phone" required error={errors.phone}>
        <TextInput id="tour-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" />
      </Field>
      <Field label="Grade interested in" htmlFor="tour-grade">
        <Select id="tour-grade" name="grade" defaultValue={gradeOptions[3]}>
          {gradeOptions.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Preferred branch" htmlFor="tour-branch">
        <Select id="tour-branch" name="branch" defaultValue={branchOptions[0]}>
          {branchOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Preferred visit date" htmlFor="tour-visitDate" required error={errors.visitDate} className="sm:col-span-2">
        <TextInput id="tour-visitDate" name="visitDate" type="date" min={today} />
      </Field>

      <div className="sm:col-span-2">
        <button type="submit" disabled={submitting} className="btn-gold w-full sm:w-auto">
          {submitting ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
              </svg>
              Sending…
            </>
          ) : (
            'Book a Campus Tour'
          )}
        </button>
      </div>
    </form>
  );
}
