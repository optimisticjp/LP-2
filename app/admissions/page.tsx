import type { Metadata } from 'next';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Badge from '@/components/Badge';
import BranchSelector from '@/components/BranchSelector';
import Timeline from '@/components/Timeline';
import AdmissionForm from '@/components/AdmissionForm';
import TourForm from '@/components/TourForm';
import FAQAccordion from '@/components/FAQAccordion';
import { Icon } from '@/components/icons';
import { admissionFaqs } from '@/data/faqs';
import { site, whatsappLink } from '@/data/site';

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Admissions at L. P. Savani Group of Schools for ' +
    site.admissionsYear +
    '. Choose your campus, follow a simple step-by-step process, see the documents required and send an enquiry or book a campus visit.',
  alternates: { canonical: '/admissions' },
};

const steps = [
  { title: 'Submit enquiry', body: 'Share a few details and your preferred campus. This takes a couple of minutes.' },
  { title: 'Speak with an admission counsellor', body: 'Our team gets in touch to understand your needs and answer your questions.' },
  { title: 'Visit campus', body: 'See the classrooms, facilities and meet the team in person.' },
  { title: 'Complete application', body: 'Fill in the application form for your chosen campus and grade.' },
  { title: 'Document verification', body: 'Submit the required documents so the office can verify them.' },
  { title: 'Admission confirmation', body: 'On successful completion, we welcome your child to the L. P. Savani family.' },
];

const checklist = [
  'Decide on the campus and board that suit your family',
  'Note your child\u2019s current grade and the grade you are applying for',
  'Keep the required documents ready',
  'Book a campus visit to see the school in person',
  'Submit your enquiry early, as seats vary by grade',
];

const documents = [
  'Birth certificate copy of the student (English version)',
  'Passport-size photographs of the student',
  'Passport-size photographs of both parents',
  'Aadhaar card copy of the student',
  'Aadhaar card copy of both parents',
  'Previous year report card (from Grade 1 onwards)',
  'Transfer or leaving certificate from previous school (from Grade 1 onwards)',
  'Pre-board result copy (for Grade 11 students)',
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deepNavy text-white">
        <Container className="py-16 sm:py-20 lg:py-28">
          <Badge tone="white" icon="check">
            Admissions open for {site.admissionsYear}
          </Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            A simple, supported admission journey
          </h1>
          <p className="mt-4 max-w-2xl text-brand-100 sm:text-lg">
            Choosing the right school is a big decision. We have made the process clear and friendly,
            from your first enquiry to your child&rsquo;s first day.
          </p>
        </Container>
      </section>

      {/* Branch selector */}
      <section className="bg-white pt-8 pb-14 sm:pb-20 lg:pb-24">
        <Container>
          <BranchSelector />
        </Container>
      </section>

      {/* Process + checklist */}
      <section className="bg-mist section-y">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Step by step" title="How admissions work" className="mb-8" />
              <Timeline items={steps} />
            </div>
            <div>
              <SectionHeading eyebrow="Parent checklist" title="Before you begin" className="mb-8" />
              <ul className="space-y-3">
                {checklist.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-2xl border border-cloud bg-white p-4 shadow-soft">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-leaf-500" />
                    <span className="text-[15px] font-medium leading-relaxed text-ink">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Documents + criteria/fees */}
      <section className="bg-white section-y">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Documents required"
                title="What to keep ready"
                subtitle="A typical document list is shown below. The exact requirement is confirmed by each campus office and may vary by grade and campus."
                className="mb-6"
              />
              <div className="overflow-hidden rounded-2xl border border-cloud bg-white shadow-soft">
                <ul className="divide-y divide-cloud">
                  {documents.map((d, i) => (
                    <li key={d} className="flex items-start gap-3 px-5 py-3.5">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                        {i + 1}
                      </span>
                      <span className="text-[15px] leading-relaxed text-ink-soft">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-cloud bg-mist p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-600 shadow-soft">
                  <Icon name="users" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink">Age criteria</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                  Age requirements follow each board&rsquo;s norms and vary slightly by grade. Share your
                  child&rsquo;s date of birth with your enquiry and the admissions team will confirm the
                  right grade and the exact age criteria for your chosen campus.
                </p>
              </div>
              <div className="rounded-2xl border border-cloud bg-mist p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-600 shadow-soft">
                  <Icon name="book" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink">Fee details</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                  The fee structure varies by campus, board and grade. Send an enquiry and the campus
                  office will share the complete, up-to-date fee details and the available payment
                  options for your selected grade.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Admission enquiry form */}
      <section className="bg-mist section-y">
        <Container size="tight">
          <SectionHeading
            eyebrow="Admission enquiry"
            title="Send your enquiry"
            subtitle="Share your details and our admissions team will get in touch to guide you through the next steps."
            align="center"
            className="mb-8"
          />
          <div className="rounded-3xl border border-cloud bg-white p-6 shadow-card sm:p-8">
            <AdmissionForm />
          </div>
        </Container>
      </section>

      {/* Book campus tour */}
      <section id="tour" className="scroll-mt-28 bg-white section-y">
        <Container size="tight">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <Badge tone="gold" icon="pin">
                Book a Campus Tour
              </Badge>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-ink">See a campus in person</h2>
              <p className="mt-3 text-ink-soft">
                Nothing beats walking through a campus. Request a visit and our team will confirm a
                convenient time to show you the classrooms, labs and facilities, and answer your questions.
              </p>
              <ul className="mt-5 space-y-2.5">
                {['Meet the team', 'See classrooms and facilities', 'Ask anything about admissions'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-ink-soft">
                    <Icon name="check" className="h-4 w-4 text-leaf-500" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-cloud bg-mist p-6 shadow-soft sm:p-7">
              <TourForm />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-mist section-y">
        <Container size="tight">
          <SectionHeading eyebrow="Questions" title="Admission FAQs" align="center" className="mb-8" />
          <FAQAccordion items={admissionFaqs} />
        </Container>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-white pb-20 pt-4">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#22B455] p-8 text-center text-white sm:flex-row sm:p-10 sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Icon name="whatsapp" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Prefer to chat?</h3>
                <p className="text-sm text-white/90">Message our admissions team on WhatsApp for a quick reply.</p>
              </div>
            </div>
            <a
              href={whatsappLink('Hi, I would like to enquire about admissions at L. P. Savani for ' + site.admissionsYear + '.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white w-full shrink-0 sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
