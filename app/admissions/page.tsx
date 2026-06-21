import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import AdmissionForm from '@/components/AdmissionForm';
import TourForm from '@/components/TourForm';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { Icon } from '@/components/icons';
import { school, whatsappLink } from '@/data/school';
import { admissionFaqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: `Admissions ${school.session}`,
  description:
    'Admissions for 2026-27 are open at L. P. Savani School, Palanpor. See the process, age criteria, documents required and book a campus tour. Enquire online today.',
};

const steps = [
  { n: '01', title: 'Send an enquiry', text: 'Fill the form below or call us. Share your child\u2019s grade and a few details.' },
  { n: '02', title: 'Talk to a counsellor', text: 'Our team calls you back to explain eligibility, the process and next steps.' },
  { n: '03', title: 'Visit the campus', text: 'See classrooms, labs and facilities, and meet our teachers in person.' },
  { n: '04', title: 'Complete admission', text: 'Submit documents, confirm the seat and welcome your child to the school.' },
];

const ageCriteria = [
  { grade: 'Pre-Primary (Nursery)', age: '3+ years' },
  { grade: 'Pre-Primary (LKG / UKG)', age: '4 to 5+ years' },
  { grade: 'Grade 1', age: '6+ years' },
  { grade: 'Grades 2 to 9', age: 'As per previous grade and records' },
];

const documents = [
  'Birth certificate of the child',
  'Recent passport-size photographs',
  'Previous school report card, where applicable',
  'Transfer certificate from the previous school, where applicable',
  'Address proof and parent identity proof',
  'Aadhaar card of the child, if available',
];

const checklist = [
  'Is the campus safe, clean and well supervised?',
  'Do teachers give individual attention to each child?',
  'Is there a real balance of academics, sport and arts?',
  'Are class sizes sensible and well managed?',
  'Does the school communicate openly with parents?',
  'Can my child commute comfortably and safely?',
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0">
          <Image src="/images/admissions.jpg" alt="Admissions at L. P. Savani School, Palanpor" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-800/60" />
        </div>
        <Container className="relative py-16 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gold-400" />
            Now enrolling for {school.session}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Admissions are open. Let us help you decide with confidence.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            Send an enquiry, talk to a real counsellor and visit the campus before you decide.
            Seats in each grade are limited, so the earlier you reach out, the better.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#enquiry" className="btn-gold">Enquire now</a>
            <a href="#campus-tour" className="btn-ghost">Book a campus tour</a>
          </div>
        </Container>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="scroll-mt-24 bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <span className="eyebrow">Admission enquiry</span>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Start here. It takes a minute.</h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Tell us a little about your child and the grade you are considering. Our admission
                counsellor will get in touch to guide you through everything, with no obligation.
              </p>
              <div className="mt-7 space-y-4">
                <a href={`tel:${school.contact.phoneTel}`} className="flex items-center gap-4 rounded-2xl border border-brand-50 bg-mist p-4 transition-colors hover:bg-brand-50">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white">
                    <Icon name="heart" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">Call admissions</span>
                    <span className="block font-semibold text-ink">{school.contact.phoneDisplay}</span>
                  </span>
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-brand-50 bg-mist p-4 transition-colors hover:bg-brand-50">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-leaf-600 text-white">
                    <Icon name="heart" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">Message us</span>
                    <span className="block font-semibold text-ink">Chat on WhatsApp</span>
                  </span>
                </a>
                <p className="text-sm text-ink-muted">
                  Office hours: {school.contact.officeHours}.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card p-6 sm:p-8">
                <h3 className="text-xl text-ink">Admission enquiry form</h3>
                <p className="mt-1 text-sm text-ink-muted">Fields marked with * are required.</p>
                <div className="mt-6">
                  <AdmissionForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="A simple, guided admission process"
            subtitle="Four straightforward steps, with our team helping you at every stage."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="card h-full p-6">
                  <span className="font-display text-3xl font-semibold text-gold-400">{step.n}</span>
                  <h3 className="mt-3 text-lg text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Criteria + documents */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Age criteria</span>
              <h2 className="mt-3 text-2xl text-ink sm:text-3xl">Finding the right grade</h2>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                The guide below is indicative. Exact eligibility is confirmed at the time of
                enquiry, based on your child&rsquo;s date of birth and records.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-50">
                <table className="w-full text-left text-sm">
                  <thead className="bg-brand-50 text-ink">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Grade</th>
                      <th className="px-5 py-3 font-semibold">Indicative age</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-50">
                    {ageCriteria.map((row) => (
                      <tr key={row.grade} className="bg-white">
                        <td className="px-5 py-3 text-ink">{row.grade}</td>
                        <td className="px-5 py-3 text-ink-soft">{row.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-ink-muted">
                Age bands are placeholders for layout. Please confirm current criteria with the
                school office.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <span className="eyebrow">Documents</span>
              <h2 className="mt-3 text-2xl text-ink sm:text-3xl">What to keep ready</h2>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                You do not need these to enquire. They are required later, once a seat is
                confirmed. The office shares the full checklist after your enquiry.
              </p>
              <ul className="mt-6 space-y-3">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 rounded-xl border border-brand-50 bg-mist p-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                      <Icon name="book" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-ink">{doc}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Fees placeholder + prospectus */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-8 rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Fees and prospectus</span>
              <h2 className="mt-3 text-2xl text-ink sm:text-3xl">Clear information, shared on request</h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Fee details for {school.session} are shared by the school office so you get the
                current structure and any applicable terms. Download the prospectus for an overview,
                or talk to admissions for specifics.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={school.prospectusUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Download prospectus
                </a>
                <a href={`tel:${school.contact.phoneTel}`} className="btn-outline">
                  Ask about fees
                </a>
              </div>
              <p className="mt-3 text-xs text-ink-muted">
                The prospectus shipped here is a placeholder. Replace it with the school&rsquo;s official file.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-900 p-6 text-white sm:p-8">
              <h3 className="font-display text-xl">Why visit before deciding</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100">
                A brochure can only show so much. A short campus visit tells you how the school
                feels: the energy in classrooms, the care in small moments, the things that matter
                most for your child.
              </p>
              <a href="#campus-tour" className="btn-gold mt-6">
                Book a campus tour
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Campus tour */}
      <section id="campus-tour" className="scroll-mt-24 bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <span className="eyebrow">Campus tour</span>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Come and see it for yourself</h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Pick a date that suits you and our team will confirm a time. Walk the campus, see
                the classrooms and labs, and ask every question on your mind. There is no better way
                to decide.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Meet teachers and the admissions team',
                  'See classrooms, labs, library and play areas',
                  'Understand the daily routine and safety setup',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Icon name="heart" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="card p-6 sm:p-8">
                <h3 className="text-xl text-ink">Request a campus tour</h3>
                <p className="mt-1 text-sm text-ink-muted">We will call to confirm your slot.</p>
                <div className="mt-6">
                  <TourForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Parent decision checklist */}
      <section className="bg-brand-50/60">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <span className="eyebrow">For parents</span>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">A checklist for choosing a school</h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Choosing a school is a big decision. Use this simple checklist on any campus you
                visit, including ours. The right school will answer yes to all of it.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-brand-50 bg-white p-4 shadow-soft">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                      <Icon name="shield" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <Container size="tight" className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="Questions, answered"
            title="Admission FAQs"
            subtitle="The things parents ask us most. If your question is not here, just call or message the office."
          />
          <div className="mt-10">
            <FAQAccordion items={admissionFaqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
