'use client';

import { useState } from 'react';
import { Field, Select, SuccessMessage, TextArea, TextInput, branchOptions } from '@/components/FormFields';

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'message', string>>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const next: Errors = {};
    if (!name) next.name = 'Please enter your name.';
    if (!/^[0-9+\s-]{10,15}$/.test(phone)) next.phone = 'Please enter a valid phone number.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email.';
    if (!message) next.message = 'Please add a short message.';

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
        message="We have received your message and the right campus team will get back to you soon."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field label="Your name" htmlFor="c-name" required error={errors.name}>
        <TextInput id="c-name" name="name" type="text" autoComplete="name" placeholder="Full name" />
      </Field>
      <Field label="Phone number" htmlFor="c-phone" required error={errors.phone}>
        <TextInput id="c-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" />
      </Field>
      <Field label="Email" htmlFor="c-email" error={errors.email}>
        <TextInput id="c-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
      </Field>
      <Field label="Campus of interest" htmlFor="c-branch">
        <Select id="c-branch" name="branch" defaultValue={branchOptions[0]}>
          {branchOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Message" htmlFor="c-message" required error={errors.message} className="sm:col-span-2">
        <TextArea id="c-message" name="message" placeholder="How can we help?" />
      </Field>
      <div className="sm:col-span-2">
        <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
          {submitting ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
              </svg>
              Sending…
            </>
          ) : (
            'Send message'
          )}
        </button>
      </div>
    </form>
  );
}
