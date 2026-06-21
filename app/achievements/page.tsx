import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Badge from '@/components/Badge';
import CTASection from '@/components/CTASection';
import { Icon, type IconName } from '@/components/icons';
import { schools } from '@/data/schools';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'A celebration of growth across L. P. Savani Group of Schools: strong academics, sport and athletics, arts and culture, competitions and Olympiads, and student leadership across every campus.',
  alternates: { canonical: '/achievements' },
};

const areas: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Academics',
    body: 'A culture of strong fundamentals and curiosity, where students are consistently encouraged to aim higher and supported, year on year, to get there.',
    icon: 'book',
  },
  {
    title: 'Sports & athletics',
    body: 'Regular participation in athletics and team games, with students representing the school across inter-school meets and tournaments.',
    icon: 'dumbbell',
  },
  {
    title: 'Arts & culture',
    body: 'Music, dance, drama and visual art are woven into school life, with frequent stages for students to perform, exhibit and shine.',
    icon: 'palette',
  },
  {
    title: 'Competitions & Olympiads',
    body: 'Students take part in Olympiads, quizzes and creative competitions that stretch their thinking well beyond the syllabus.',
    icon: 'star',
  },
  {
    title: 'Student leadership',
    body: 'Student councils, house systems and event-led roles help young people lead, organise and take real responsibility.',
    icon: 'users',
  },
  {
    title: 'Holistic growth',
    body: 'Beyond results, the focus stays on confident, well-rounded individuals grounded in values, empathy and good habits.',
    icon: 'heart',
  },
];

const recognitions: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Consistent board performance',
    body: 'Students leave each stage well-prepared for board examinations and ready for the next step in their education.',
    icon: 'shield',
  },
  {
    title: 'Beyond the classroom',
    body: 'From sports fields to cultural stages, students are recognised for participation, sportsmanship and creativity.',
    icon: 'sparkle',
  },
  {
    title: 'Recognised for character',
    body: 'Discipline, empathy and leadership are celebrated as much as marks across every campus.',
    icon: 'heart',
  },
];

export default function AchievementsPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-18">
          <Badge tone="brand" icon="star">
            Achievements
          </Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Celebrating growth, in and beyond the classroom
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft sm:text-lg">
            Across our campuses, students grow in academics, sport, the arts and leadership — and are
            recognised for character as much as results. Here is a look at where L. P. Savani students
            shine.
          </p>
        </Container>
      </section>

      <section className="bg-mist section-y">
        <Container>
          <SectionHeading eyebrow="Areas of growth" title="Where our students shine" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="card card-hover h-full p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={a.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="bg-white section-y">
        <Container>
          <SectionHeading
            eyebrow="Recognition"
            title="Recognised for more than results"
            subtitle="Across boards and campuses, L. P. Savani students are known for strong foundations, wide participation, and a culture of leadership and good character."
            align="center"
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {recognitions.map((r) => (
              <div key={r.title} className="card h-full p-7 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gold-50 text-gold-600">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* By campus */}
      <section className="bg-mist section-y">
        <Container>
          <SectionHeading
            eyebrow="Across our campuses"
            title="Achievements by campus"
            subtitle="Each campus brings its own strengths in academics, sport and the arts. Explore any campus to see what makes it special."
            className="mb-8"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {schools.map((s) => (
              <Link
                key={s.slug}
                href={`/schools/${s.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-cloud bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div>
                  <div className="font-semibold text-ink">{s.shortName}</div>
                  <div className="text-xs text-ink-muted">{s.board}</div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  View campus
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection className="pb-20" />
    </>
  );
}
