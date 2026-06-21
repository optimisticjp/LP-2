import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import CTASection from '@/components/CTASection';
import { Icon } from '@/components/icons';
import { school, groupStats } from '@/data/school';

export const metadata: Metadata = {
  title: 'About the School',
  description:
    'Learn about L. P. Savani School, Palanpor: our approach, values and leadership, and how we sit within the wider L. P. Savani group of schools in Surat.',
};

const values = [
  { icon: 'heart' as const, title: 'Care first', text: 'We treat every child as our own, with patience, warmth and respect.' },
  { icon: 'book' as const, title: 'Love of learning', text: 'We build curiosity and a reading habit that lasts well beyond school.' },
  { icon: 'shield' as const, title: 'Integrity', text: 'Honesty, responsibility and good values run through everything we do.' },
  { icon: 'dumbbell' as const, title: 'Balance', text: 'Academics, sport and the arts grow together, not at each other\u2019s cost.' },
  { icon: 'building' as const, title: 'Community', text: 'We work closely with parents, because the best results come from partnership.' },
  { icon: 'monitor' as const, title: 'Future ready', text: 'We prepare children to think, adapt and use technology with confidence.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0">
          <Image src="/images/about-campus.jpg" alt="L. P. Savani School campus" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-800/60" />
        </div>
        <Container className="relative py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">About us</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A neighbourhood school with a big-picture vision
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            {school.fullName} brings the experience of the L. P. Savani group to families in
            Palanpor, with a campus built around the wellbeing and growth of every child.
          </p>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Who we are</span>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Built on two decades of experience</h2>
              <div className="mt-4 space-y-4 text-ink-soft leading-relaxed">
                <p>
                  The L. P. Savani group has spent more than twenty years educating children across
                  Surat. Our Palanpor campus carries that same belief into a close, welcoming
                  setting on Canal Road: that good schooling is equal parts strong academics and
                  genuine care.
                </p>
                <p>
                  We keep things grounded. Teachers know their students, classrooms are calm and
                  purposeful, and parents are treated as partners. The aim is simple. We want
                  children to leave each day a little more curious, a little more capable and a
                  little more sure of themselves.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/campus-overview.jpg" alt="The Palanpor campus" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full p-7 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name="building" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-2xl text-ink">Our mission</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">
                  To give every child a strong academic foundation alongside the values, skills and
                  confidence they need to thrive, in a campus that feels safe, supportive and full
                  of opportunity.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card h-full p-7 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-100 text-gold-500">
                  <Icon name="monitor" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-2xl text-ink">Our vision</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">
                  To be the school families in Palanpor trust most: a place known for caring
                  teachers, well-rounded children and a community that grows together, year after
                  year.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="The values behind our classrooms"
            subtitle="These are not posters on a wall. They shape how we teach, how we treat children and how we work with families."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <div className="card card-hover h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-brand-50/60">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl shadow-card">
                <div className="relative aspect-[4/5]">
                  <Image src="/images/principal.jpg" alt={school.principal.name} fill sizes="(max-width: 1024px) 100vw, 380px" className="object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">Leadership</span>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Guided by experienced educators</h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Our campus is led by {school.principal.name}, supported by a team of teachers and
                mentors who care deeply about getting the basics right: safety, attention and a
                classroom where children feel ready to try.
              </p>
              <blockquote className="mt-5 border-l-2 border-gold-400 pl-4 font-display text-xl leading-snug text-ink">
                &ldquo;A school should feel like a second home, where high standards and real warmth
                live side by side.&rdquo;
              </blockquote>
              <div className="mt-5">
                <p className="font-semibold text-ink">{school.principal.name}</p>
                <p className="text-sm text-ink-muted">{school.principal.title}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Group context + stats */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Part of something larger"
            title="One campus, the strength of a group"
            subtitle="Palanpor is one of six L. P. Savani campuses across Surat. That means shared experience, proven systems and a wider community behind your child."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {groupStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <StatCard value={stat.value} label={stat.label} sub={stat.sub} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/branches" className="btn-outline">
              Explore all branches
            </Link>
          </div>
        </Container>
      </section>

      <CTASection variant="soft" />
    </>
  );
}
