import type { Metadata } from 'next';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Badge from '@/components/Badge';
import CTASection from '@/components/CTASection';
import { Icon, type IconName } from '@/components/icons';
import { schools } from '@/data/schools';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'A celebration of growth across L. P. Savani Group of Schools: academics, sports, arts and culture, and student leadership. Detailed results and recognitions are updated by the school office.',
  alternates: { canonical: '/achievements' },
};

const areas: { title: string; body: string; icon: IconName }[] = [
  { title: 'Academic growth', body: 'A steady focus on strong academic foundations and a love of learning across grades.', icon: 'book' },
  { title: 'Sports participation', body: 'Students take part in athletics and team games, supported by dedicated sports spaces.', icon: 'dumbbell' },
  { title: 'Arts and culture', body: 'Music, dance and art are part of school life, with regular opportunities to perform.', icon: 'palette' },
  { title: 'Student leadership', body: 'Students are encouraged to lead, organise and take responsibility within the school.', icon: 'users' },
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
            Across our campuses, students grow in academics, sports, arts and leadership. This page is
            ready for the school office to add specific results and recognitions.
          </p>
        </Container>
      </section>

      <section className="bg-mist section-y">
        <Container>
          <SectionHeading eyebrow="Areas of growth" title="Where our students shine" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((a) => (
              <div key={a.title} className="card h-full p-6">
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

      {/* Results and recognitions placeholder */}
      <section className="bg-white section-y">
        <Container>
          <div className="rounded-3xl border border-dashed border-brand-200 bg-brand-50/40 p-8 text-center sm:p-12">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-600 shadow-soft">
              <Icon name="star" className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-2xl font-bold text-ink">Results and recognitions</h2>
            <p className="mx-auto mt-2 max-w-xl text-ink-soft">
              Board results, competition wins, and other recognitions can be featured here.
            </p>
            <p className="mt-3 text-sm font-semibold text-brand-600">To be updated by school office</p>
          </div>
        </Container>
      </section>

      {/* Branch-wise placeholder */}
      <section className="bg-mist section-y">
        <Container>
          <SectionHeading
            eyebrow="Branch-wise achievements"
            title="Highlights by campus"
            subtitle="Each campus can showcase its own milestones here. Content to be added by the school office."
            className="mb-8"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {schools.map((s) => (
              <div key={s.slug} className="flex items-center justify-between rounded-2xl border border-cloud bg-white p-5 shadow-soft">
                <div>
                  <div className="font-semibold text-ink">{s.shortName}</div>
                  <div className="text-xs text-ink-muted">{s.board}</div>
                </div>
                <span className="pill bg-mist text-ink-muted">Coming soon</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection className="pb-20" />
    </>
  );
}
