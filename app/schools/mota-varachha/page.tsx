import type { Metadata } from 'next';
import BranchLanding from '@/components/BranchLanding';
import { schoolBySlug } from '@/data/schools';

const school = schoolBySlug('mota-varachha')!;

export const metadata: Metadata = {
  title: school.name,
  description: `${school.name} in ${school.location}, Surat (${school.board} board). ${school.tagline} Enquire about admissions with the L. P. Savani Group of Schools.`,
  alternates: { canonical: '/schools/mota-varachha' },
  openGraph: {
    title: school.name,
    description: `${school.name}, ${school.location}, Surat. Part of the L. P. Savani Group of Schools.`,
    images: [{ url: school.hero }],
  },
};

export default function Page() {
  return <BranchLanding school={school} />;
}
