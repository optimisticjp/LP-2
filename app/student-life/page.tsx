import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { Icon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Student Life',
  description:
    'Sports, music, dance, art, clubs, events and leadership at L. P. Savani School, Palanpor. A look at the activities that help children grow in confidence beyond the classroom.',
};

const areas = [
  {
    icon: 'dumbbell' as const,
    title: 'Sports & fitness',
    text: 'Daily activity, team games and athletics that build fitness, discipline and a healthy sense of competition.',
    image: '/images/facility-sports.jpg',
  },
  {
    icon: 'music' as const,
    title: 'Music & dance',
    text: 'Dedicated studios where children explore rhythm, voice and movement, and perform with pride.',
    image: '/images/facility-arts.jpg',
  },
  {
    icon: 'palette' as const,
    title: 'Art & craft',
    text: 'Hands-on creative sessions that develop imagination, focus and fine motor skills.',
    image: '/images/gallery-activity-1.jpg',
  },
  {
    icon: 'cpu' as const,
    title: 'Clubs & STEM',
    text: 'Robotics, coding and interest clubs where curious children dig deeper into what they love.',
    image: '/images/facility-robotics.jpg',
  },
];

const events = [
  { title: 'Annual Day', text: 'A whole-school celebration of talent on the big stage.' },
  { title: 'Sports Day', text: 'Track, field and team events that bring out everyone\u2019s best.' },
  { title: 'Festivals', text: 'Celebrating the festivals and seasons that bring us together.' },
  { title: 'National Days', text: 'Marking Independence Day and Republic Day with pride.' },
  { title: 'Field trips', text: 'Learning beyond the gates through planned, safe outings.' },
  { title: 'Competitions', text: 'Inter-class and inter-house contests across many areas.' },
];

const lifeGallery = [
  '/images/gallery-event-1.jpg',
  '/images/gallery-sports-1.jpg',
  '/images/gallery-activity-2.jpg',
  '/images/gallery-event-2.jpg',
  '/images/student-life.jpg',
  '/images/gallery-sports-2.jpg',
];

export default function StudentLifePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0">
          <Image src="/images/student-life.jpg" alt="Student life at L. P. Savani School, Palanpor" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-800/60" />
        </div>
        <Container className="relative py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Student life</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Where children discover what they are good at
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            School is more than lessons. Sport, music, art, clubs and celebrations give every child
            a chance to shine, make friends and build real confidence.
          </p>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">A fuller school day</span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Balance is built into the week</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We believe a child who plays, creates and performs learns better too. That is why
              activities are part of the regular timetable, not a rare treat. Every child is
              encouraged to try something new and find their thing.
            </p>
          </div>
        </Container>
      </section>

      {/* Areas */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {areas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 2) * 90}>
                <article className="card card-hover group h-full overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={area.image} alt={area.title} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon name={area.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="text-xl text-ink">{area.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{area.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Events */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="Through the year"
            title="Events and celebrations"
            subtitle="The moments that make the school calendar special and bring the whole community together."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) * 80}>
                <div className="card h-full p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-100 text-gold-500">
                    <Icon name="building" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg text-ink">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership band */}
      <section className="bg-brand-900 text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow text-gold-300">Confidence and character</span>
              <h2 className="mt-3 text-3xl sm:text-4xl">Leadership and life skills</h2>
              <p className="mt-4 leading-relaxed text-brand-100">
                Through house systems, responsibilities and group activities, children learn to
                speak up, work together and lead. These are the skills that carry them well beyond
                the school years.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Public speaking', 'Teamwork', 'Responsibility', 'Empathy and care'].map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-white">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15">
                      <Icon name="heart" className="h-3 w-3" />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-3 gap-3">
                {lifeGallery.map((src) => (
                  <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
                    <Image src={src} alt="Students taking part in school life" fill sizes="(max-width: 1024px) 33vw, 180px" className="object-cover" />
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
