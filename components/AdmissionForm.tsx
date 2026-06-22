'use client';

import { useState } from 'react';
import {
  Field,
  Select,
  SuccessMessage,
  TextArea,
  TextInput,
  branchOptions,
  gradeOptions,
} from '@/components/FormFields';

type Errors = Partial<Record<'parentName' | 'phone' | 'grade' | 'email', string>>;

export default function AdmissionForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const parentName = String(data.get('parentName') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const grade = String(data.get('grade') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();

    const next: Errors = {};
    if (!parentName) next.parentName = 'Please enter your name.';
    if (!/^[0-9+\s-]{10,15}$/.test(phone)) next.phone = 'Please enter a valid phone number.';
    if (!grade) next.grade = 'Please choose a grade.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email.';

    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Front-end only: no data is sent anywhere.
      setSubmitted(true);
      form.reset();
    }
  }

  if (submitted) {
    return (
      <SuccessMessage
        title="Thank you. Our admissions team will contact you shortly."
        message="We have received your enquiry. The right campus team will reach out to guide you through the next steps and help you book a visit."
        note="This is a prototype. In the final version, enquiries can go to email, WhatsApp, CRM, or dashboard."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field label="Parent name" htmlFor="parentName" required error={errors.parentName}>
        <TextInput id="parentName" name="parentName" type="text" autoComplete="name" placeholder="Your full name" />
      </Field>
      <Field label="Student name" htmlFor="studentName">
        <TextInput id="studentName" name="studentName" type="text" placeholder="Child's name" />
      </Field>
      <Field label="Phone number" htmlFor="phone" required error={errors.phone}>
        <TextInput id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" />
      </Field>
      <Field label="Email" htmlFor="email" error={errors.email}>
        <TextInput id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
      </Field>
      <Field label="Grade interested in" htmlFor="grade" required error={errors.grade}>
        <Select id="grade" name="grade" defaultValue="">
          <option value="" disabled>
            Select a grade
          </option>
          {gradeOptions.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Preferred branch" htmlFor="branch">
        <Select id="branch" name="branch" defaultValue={branchOptions[0]}>
          {branchOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </Select>
      </Field>
      {!compact ? (
        <Field label="Message" htmlFor="message" className="sm:col-span-2">
          <TextArea id="message" name="message" placeholder="Anything you would like us to know (optional)" />
        </Field>
      ) : null}

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Admission Enquiry
        </button>
        <p className="mt-3 text-xs text-ink-muted">
          By submitting, you agree to be contacted by the admissions office. We never share your details.
        </p>
      </div>
    </form>
  );
}
