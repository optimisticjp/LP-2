'use client';

import { useState } from 'react';
import { Field, Select, SuccessMessage, TextArea, TextInput, branchOptions } from '@/components/FormFields';

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'message', string>>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
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
      setSubmitted(true);
      form.reset();
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
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Send message
        </button>
      </div>
    </form>
  );
}
