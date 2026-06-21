import type { Metadata } from 'next';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { school } from '@/data/school';

export const metadata: Metadata = {
  title: 'Mandatory Public Disclosure',
  description:
    'Mandatory public disclosure for L. P. Savani School, Palanpor: general information, documents and certificates, staff, infrastructure and results. Placeholders to be updated by the school office.',
};

const generalInfo: [string, string][] = [
  ['Name of the school', school.fullName],
  ['Affiliation / Board', 'To be updated by school office'],
  ['Affiliation number', 'To be updated by school office'],
  ['School code', 'To be updated by school office'],
  ['Complete address', school.contact.addressLines.join(', ')],
  ['Principal', school.principal.name],
  ['Principal qualification', 'To be updated by school office'],
  ['School email', school.contact.email],
  ['Contact number', school.contact.phoneDisplay],
];

const documents: [string, string][] = [
  ['Certificate of affiliation / upgradation', 'To be uploaded'],
  ['Registration / NOC certificate', 'To be uploaded'],
  ['Recognition certificate under RTE Act, 2009', 'To be uploaded'],
  ['Building safety certificate', 'To be uploaded'],
  ['Fire safety certificate', 'To be uploaded'],
  ['Self-certification on norms', 'To be uploaded'],
  ['Water, health and sanitation certificate', 'To be uploaded'],
];

const staff: [string, string][] = [
  ['Principal', '1'],
  ['Total teaching staff', 'To be updated'],
  ['Total non-teaching staff', 'To be updated'],
  ['Pupil to teacher ratio', 'To be updated'],
  ['Number of counsellors / wellness teachers', 'To be updated'],
];

const infrastructure: [string, string][] = [
  ['Total campus area', 'To be updated'],
  ['Number of classrooms', 'To be updated'],
  ['Library and reading room', 'Available'],
  ['Science laboratory', 'Available'],
  ['Computer / ICT laboratory', 'Available'],
  ['Sports and play area', 'Available'],
  ['Auditorium / activity hall', 'Available'],
  ['Medical room / first aid', 'Available'],
];

const results: [string, string][] = [
  ['Board examination results 2025-26', 'To be updated'],
  ['Number of students appeared', 'To be updated'],
  ['Number of students passed', 'To be updated'],
  ['Pass percentage', 'To be updated'],
];

function Table({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <div className="mt-4 overflow-hidden rounded-2xl border border-brand-50">
        <table className="w-full text-left text-sm">
          <tbody className="divide-y divide-brand-50">
            {rows.map(([label, value]) => (
              <tr key={label} className="bg-white">
                <th scope="row" className="w-1/2 px-5 py-3 font-medium text-ink">{label}</th>
                <td className="px-5 py-3 text-ink-soft">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function MandatoryDisclosurePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Compliance</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Mandatory public disclosure
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            Public information about the school, in line with disclosure norms. The school office
            should replace each placeholder with verified details and upload the relevant
            documents.
          </p>
        </Container>
      </section>

      {/* Notice */}
      <section className="bg-cream">
        <Container className="py-10">
          <div className="rounded-2xl border border-gold-200 bg-gold-100/50 p-5 text-sm leading-relaxed text-ink">
            <strong className="font-semibold">Please note:</strong> The tables below contain
            placeholder values marked &ldquo;To be updated&rdquo; or &ldquo;To be uploaded&rdquo;.
            They are provided as a ready structure. Enter accurate, verified information before
            publishing this page.
          </div>
        </Container>
      </section>

      {/* Tables */}
      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <SectionHeading eyebrow="Section A" title="General information" />
          <div className="mt-8">
            <Table title="School details" rows={generalInfo} />
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Section B" title="Documents and certificates" />
            <div className="mt-8">
              <Table title="Documents to be made available" rows={documents} />
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Section C" title="Staff" />
            <div className="mt-8">
              <Table title="Teaching and support staff" rows={staff} />
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Section D" title="Infrastructure" />
            <div className="mt-8">
              <Table title="Campus and facilities" rows={infrastructure} />
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Section E" title="Results" />
            <div className="mt-8">
              <Table title="Board examination results" rows={results} />
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 text-center">
            <p className="text-sm leading-relaxed text-ink-soft">
              For any clarification on disclosure information, contact the school office at{' '}
              <a href={`tel:${school.contact.phoneTel}`} className="font-semibold text-brand-600 hover:text-brand-700">
                {school.contact.phoneDisplay}
              </a>{' '}
              or{' '}
              <a href={`mailto:${school.contact.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
                {school.contact.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <CTASection variant="soft" />
    </>
  );
}
