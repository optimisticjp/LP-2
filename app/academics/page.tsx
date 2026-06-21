import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { Icon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Our academic approach at L. P. Savani School, Palanpor: concept-first teaching, strong fundamentals, STEM and digital skills, and learning stages from pre-primary to senior grades.',
};

const stages = [
  {
    name: 'Pre-Primary',
    grades: 'Nursery to UKG',
    text: 'A gentle, play-led start where children build language, motor skills and a love for school through stories, songs, art and structured play.',
    points: ['Play-based learning', 'Early language and numbers', 'Social and emotional growth'],
  },
  {
    name: 'Primary',
    grades: 'Grades 1 to 5',
    text: 'Strong foundations in reading, writing and maths, with hands-on activities that make concepts stick and keep curiosity alive.',
    points: ['Reading and writing focus', 'Concept-first maths and science', 'Activity-based lessons'],
  },
  {
    name: 'Middle',
    grades: 'Grades 6 to 8',
    text: 'Deeper subject learning with project work, labs and technology, building independent thinking and good study habits.',
    points: ['Science and computer labs', 'Projects and group work', 'Study skills and discipline'],
  },
  {
    name: 'Senior',
    grades: 'Grades 9 and above',
    text: 'Focused academic preparation with regular practice, mentoring and guidance, helping students aim high with a clear plan.',
    points: ['Exam readiness', 'Mentoring and guidance', 'Goal-focused practice'],
  },
];

const pillars = [
  { icon: 'book' as const, title: 'Concept clarity', text: 'We teach the why behind every idea, so understanding comes before memorising.' },
  { icon: 'beaker' as const, title: 'Learning by doing', text: 'Labs, experiments and projects turn lessons into real, lasting understanding.' },
  { icon: 'cpu' as const, title: 'Digital and STEM', text: 'Computers, coding and robotics build the skills children need for the future.' },
  { icon: 'monitor' as const, title: 'Smart classrooms', text: 'Digital boards and teaching aids make lessons clearer and more engaging.' },
  { icon: 'heart' as const, title: 'Caring teachers', text: 'Attentive teachers track each child and step in early when support is needed.' },
  { icon: 'building' as const, title: 'Regular feedback', text: 'Clear, honest updates to parents so there are no surprises at report time.' },
];

export default function AcademicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0">
          <Image src="/images/academics.jpg" alt="A lesson at L. P. Savani School, Palanpor" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-800/60" />
        </div>
        <Container className="relative py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Academics</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Learning built to last, not just to pass
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            We keep the basics strong and the thinking sharp, so children understand what they
            learn and can use it well beyond the exam hall.
          </p>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Our philosophy</span>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Understanding first, marks follow</h2>
              <div className="mt-4 space-y-4 text-ink-soft leading-relaxed">
                <p>
                  Good marks matter, but they are the result of real understanding, not the goal in
                  themselves. Our teachers focus on making concepts clear, connecting them to the
                  world children know, and giving plenty of practice along the way.
                </p>
                <p>
                  The result is children who can explain their thinking, tackle new problems with
                  confidence and carry a genuine curiosity into the next stage of learning.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/facility-classroom.jpg" alt="Smart classroom learning" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Stages */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="Learning stages"
            title="The right approach at every age"
            subtitle="From the first day of pre-primary to the senior grades, teaching grows with the child."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {stages.map((stage, i) => (
              <Reveal key={stage.name} delay={(i % 2) * 80}>
                <div className="card card-hover h-full p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl text-ink">{stage.name}</h3>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {stage.grades}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{stage.text}</p>
                  <ul className="mt-4 space-y-2">
                    {stage.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-ink">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                          <Icon name="heart" className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink-muted">
            Grade groupings are indicative. Please confirm the current academic structure with the school office.
          </p>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="How we teach"
            title="What makes our classrooms work"
            subtitle="The everyday habits and tools behind steady, confident progress."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <div className="card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Assessment band */}
      <section className="bg-brand-900 text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow text-gold-300">Assessment and support</span>
              <h2 className="mt-3 text-3xl sm:text-4xl">Progress you can actually see</h2>
              <p className="mt-4 leading-relaxed text-brand-100">
                We use regular, low-stress assessment to understand how each child is doing, then
                act on it. Where a child needs help, teachers step in early. Where a child is ready
                for more, we stretch them. Parents stay informed throughout.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { t: 'Continuous review', d: 'Ongoing checks, not just term exams.' },
                  { t: 'Early support', d: 'Quick help the moment a child falls behind.' },
                  { t: 'Open reporting', d: 'Honest, regular updates to parents.' },
                  { t: 'Encouragement', d: 'Effort and improvement are recognised.' },
                ].map((b) => (
                  <div key={b.t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="font-semibold text-white">{b.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-100">{b.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection variant="soft" />
    </>
  );
}
