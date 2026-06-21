import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Badge from '@/components/Badge';
import ProposalSection from '@/components/ProposalSection';
import ProposalCard from '@/components/ProposalCard';
import Timeline from '@/components/Timeline';
import { Icon } from '@/components/icons';
import {
  proposalIntro,
  opportunity,
  currentChallenges,
  proposedSolution,
  prototypeHighlights,
  roadmap,
  businessBenefits,
  nextStep,
} from '@/data/proposal';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Digital Transformation Proposal',
  description:
    'A proposal for a central digital platform for the L. P. Savani Group of Schools: one premium group website that builds parent trust, organises every campus, and grows admission enquiries.',
  alternates: { canonical: '/proposal' },
  robots: { index: false, follow: true },
};

export default function ProposalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deepNavy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-600/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"
        />
        <Container className="relative py-16 sm:py-24">
          <Badge tone="white" icon="sparkle">
            {proposalIntro.eyebrow}
          </Badge>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Digital Transformation Proposal for L. P. Savani Group of Schools
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            {proposalIntro.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn-gold">
              View the live prototype
            </Link>
            <Link href="/schools" className="btn-white">
              See the campuses
            </Link>
          </div>
        </Container>
      </section>

      <div className="bg-white">
        <Container className="max-w-4xl space-y-16 section-y">
          {/* 1. Opportunity */}
          <ProposalSection index={1} eyebrow="Why now" title={opportunity.title}>
            <div className="space-y-4 text-ink-soft">
              {opportunity.body.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </ProposalSection>

          {/* 2. Current challenge */}
          <ProposalSection index={2} eyebrow="Where we are today" title="The current challenge">
            <div className="grid gap-4 sm:grid-cols-2">
              {currentChallenges.map((c) => (
                <div key={c.title} className="rounded-2xl border border-cloud bg-mist p-5">
                  <h3 className="flex items-start gap-2 text-base font-bold text-ink">
                    <Icon name="chevronRight" className="mt-1 h-4 w-4 shrink-0 text-brand-500" />
                    {c.title}
                  </h3>
                  <p className="mt-1.5 pl-6 text-sm leading-relaxed text-ink-soft">{c.body}</p>
                </div>
              ))}
            </div>
          </ProposalSection>

          {/* 3. Proposed solution */}
          <ProposalSection index={3} eyebrow="The plan" title="The proposed solution">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {proposedSolution.map((s) => (
                <ProposalCard key={s.title} title={s.title} body={s.body} icon={s.icon} />
              ))}
            </div>
          </ProposalSection>

          {/* 4. Prototype highlights */}
          <ProposalSection index={4} eyebrow="What you are seeing" title="In this prototype">
            <div className="rounded-2xl border border-cloud bg-brand-50/40 p-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {prototypeHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-leaf-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </ProposalSection>

          {/* 5. Roadmap */}
          <ProposalSection index={5} eyebrow="The path forward" title="Phase-wise roadmap">
            <Timeline items={roadmap} />
          </ProposalSection>

          {/* 6. Business benefits */}
          <ProposalSection index={6} eyebrow="The return" title="Business benefits">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {businessBenefits.map((b) => (
                <ProposalCard key={b.title} title={b.title} body={b.body} icon={b.icon} />
              ))}
            </div>
          </ProposalSection>

          {/* 7. Next step */}
          <ProposalSection index={7} eyebrow="Let's begin" title={nextStep.title}>
            <div className="rounded-3xl bg-deepNavy p-8 text-white sm:p-10">
              <p className="text-lg leading-relaxed text-brand-50">{nextStep.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/schools/palanpor" className="btn-gold">
                  See a branch in full detail
                </Link>
                <Link href="/contact" className="btn-white">
                  Discuss the proposal
                </Link>
              </div>
            </div>
          </ProposalSection>

          <p className="border-t border-cloud pt-8 text-center text-sm text-ink-muted">
            Prepared as a working prototype for {site.name}. Content and figures are editable and can be
            refined together.
          </p>
        </Container>
      </div>
    </>
  );
}
