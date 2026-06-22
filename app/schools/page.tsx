import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import SchoolCard from '@/components/SchoolCard';
import CTASection from '@/components/CTASection';
import Badge from '@/components/Badge';
import { Icon } from '@/components/icons';
import { schools } from '@/data/schools';
import { whatsappLink } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our Schools in Surat',
  description:
    'Explore all six L. P. Savani campuses across Surat: Adajan, Pal, Palanpor, Vesu, Dabholi and Mota Varachha. Compare locations and boards, and find the right school for your child.',
  alternates: { canonical: '/schools' },
};

export default function SchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deepNavy text-white">
        <Container className="py-16 sm:py-20">
          <Badge tone="white" icon="building">
            Six campuses, one group
          </Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Find the right L. P. Savani campus
          </h1>
          <p className="mt-4 max-w-2xl text-brand-100 sm:text-lg">
            Explore campuses across Surat under one trusted educational group. Compare locations and
            boards, see what each campus offers, and enquire with the right team.
          </p>
        </Container>
      </section>

      {/* Grid */}
      <section className="bg-white section-y">
        <Container>
          <SectionHeading
            eyebrow="All campuses"
            title="Our group of schools"
            subtitle="Each campus has its own identity, with the same shared commitment to academics, values and care."
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {schools.map((s) => (
              <SchoolCard key={s.slug} school={s} showHighlights />
            ))}
          </div>
        </Container>
      </section>

      {/* Compare campuses */}
      <section id="compare" className="scroll-mt-28 bg-mist section-y">
        <Container>
          <SectionHeading
            eyebrow="Compare campuses"
            title="Campuses at a glance"
            subtitle="A quick comparison to help you shortlist by location and board."
            className="mb-8"
          />
          <div className="overflow-x-auto rounded-2xl border border-cloud bg-white shadow-soft">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-cloud bg-mist text-xs uppercase tracking-wider text-ink-muted">
                  <th className="px-5 py-4 font-semibold">Campus</th>
                  <th className="px-5 py-4 font-semibold">Location</th>
                  <th className="px-5 py-4 font-semibold">Board</th>
                  <th className="px-5 py-4 font-semibold">Online presence</th>
                  <th className="px-5 py-4 font-semibold"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cloud">
                {schools.map((s) => (
                  <tr key={s.slug} className="hover:bg-mist/60">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-ink">{s.shortName}</div>
                      <div className="text-xs text-ink-muted">{s.name}</div>
                    </td>
                    <td className="px-5 py-4 text-ink-soft">{s.location}</td>
                    <td className="px-5 py-4">
                      <span className="font-medium text-brand-600">{s.board}</span>
                    </td>
                    <td className="px-5 py-4">
                      {s.hasDedicatedWebsite ? (
                        <a
                          href={s.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-brand-700 hover:underline"
                        >
                          Campus website <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="text-ink-muted">Group page</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          href={`/schools/${s.slug}`}
                          className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700"
                        >
                          View <Icon name="arrow" className="h-4 w-4" />
                        </Link>
                        <a
                          href={s.admissionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold leading-tight text-brand-700 hover:underline"
                        >
                          Admission Enquiry <Icon name="arrowUpRight" className="h-3.5 w-3.5 shrink-0" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Need help choosing */}
      <section className="bg-white section-y">
        <Container>
          <div className="grid items-center gap-8 rounded-3xl bg-deepNavy p-8 text-white sm:p-12 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <span className="eyebrow text-gold-300">Need help choosing?</span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Tell us about your child, and we&rsquo;ll help you find the right campus
              </h2>
              <p className="mt-3 max-w-xl text-brand-100">
                Share where you live and the board you prefer. Our admissions team will guide you to the
                campus that fits your family best.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/admissions" className="btn-gold w-full">
                Talk to Admissions
              </Link>
              <a
                href={whatsappLink('Hi, I need help choosing the right L. P. Savani campus for my child.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white w-full"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTASection className="pb-20" />
    </>
  );
}
