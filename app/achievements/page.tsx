import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { Icon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Academic results, sports, arts and competition highlights from L. P. Savani School, Palanpor. Detailed results for 2025-26 will be published here soon.',
};

const categories = [
  { icon: 'book' as const, title: 'Academics', text: 'Board results, toppers and consistent year-on-year performance.' },
  { icon: 'dumbbell' as const, title: 'Sports', text: 'Wins and participation across athletics, team games and tournaments.' },
  { icon: 'music' as const, title: 'Arts & culture', text: 'Recognition in music, dance, art and cultural competitions.' },
  { icon: 'cpu' as const, title: 'Olympiads & STEM', text: 'Achievements in olympiads, quizzes and science and tech contests.' },
];

const comingSoon = [
  { tag: 'Academics', title: 'Board Results 2025-26', note: 'Results coming soon' },
  { tag: 'Academics', title: 'Subject Toppers 2025-26', note: 'To be updated' },
  { tag: 'Sports', title: 'Sports Day Highlights', note: 'Photos and results coming soon' },
  { tag: 'Culture', title: 'Annual Day Highlights', note: 'Coming soon' },
  { tag: 'Olympiads', title: 'Olympiad Achievers', note: 'To be updated' },
  { tag: 'Competitions', title: 'Inter-School Wins', note: 'Coming soon' },
];

export default function AchievementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0">
          <Image src="/images/gallery-event-3.jpg" alt="Celebrating achievements at L. P. Savani School, Palanpor" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-800/60" />
        </div>
        <Container className="relative py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Achievements</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Celebrating effort, growth and success
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            We are proud of what our students achieve, in the classroom and well beyond it.
            Detailed results and highlights for {''}
            <span className="font-semibold text-white">2025-26</span> will be published here soon.
          </p>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="What we celebrate"
            title="Achievement across the board"
            subtitle="Success at our school is not just about marks. We recognise growth in every area of school life."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="card card-hover h-full p-6 text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Coming soon grid */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Updating soon"
            title="Results and highlights, on the way"
            subtitle="We are putting together verified results and photos for the latest session. Check back shortly, or ask the office for the most recent figures."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoon.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-dashed border-brand-200 bg-white p-6">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{item.tag}</span>
                  <h3 className="mt-4 text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-muted">
                    <span className="h-2 w-2 rounded-full bg-gold-400" />
                    {item.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-soft">
            <p className="text-sm leading-relaxed text-ink-soft">
              This page is set up and ready. Replace the placeholders with real, verified results,
              names and photos before sharing the site publicly.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
