import type { Metadata } from 'next';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import BranchCard from '@/components/BranchCard';
import StatCard from '@/components/StatCard';
import CTASection from '@/components/CTASection';
import { branches } from '@/data/branches';
import { groupStats } from '@/data/school';

export const metadata: Metadata = {
  title: 'Our Branches',
  description:
    'L. P. Savani runs six campuses across Surat, including Palanpor, Adajan, Pal, Vesu, Dabholi and Mota Varachha. Explore all branches of the L. P. Savani group.',
};

export default function BranchesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Our branches</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            One group, six campuses across Surat
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            The L. P. Savani family spans the city. Wherever you are, there is likely a campus
            nearby, backed by the same experience and shared values.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {groupStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} sub={stat.sub} light />
            ))}
          </div>
        </Container>
      </section>

      {/* Branch grid */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Explore campuses"
            title="Find the campus closest to you"
            subtitle="Each campus has its own character, but all share the L. P. Savani commitment to caring, well-rounded education."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch, i) => (
              <Reveal key={branch.name + branch.area} delay={(i % 3) * 80}>
                <BranchCard branch={branch} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            Links to other campuses open their official websites in a new tab. Some branches share a
            common contact page.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
