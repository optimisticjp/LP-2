import { schools } from './schools';

export type NavLink = { label: string; href: string };

// Top-level header links (Schools is rendered as a mega menu, handled in Header).
export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Schools', href: '/schools' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

// Cards shown inside the Schools mega menu.
export const megaSchools = schools.map((s) => ({
  slug: s.slug,
  name: s.shortName,
  fullName: s.name,
  location: s.location,
  board: s.board,
  href: `/schools/${s.slug}`,
  thumb: s.thumb,
  flagship: s.flagship ?? false,
}));

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'The Group',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About the Group', href: '/about' },
      { label: 'All Schools', href: '/schools' },
      { label: 'Achievements', href: '/achievements' },
    ],
  },
  {
    title: 'Our Campuses',
    links: schools.map((s) => ({ label: s.shortName, href: `/schools/${s.slug}` })),
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Admissions Overview', href: '/admissions' },
      { label: 'Admission Process', href: '/admission-process' },
      { label: 'Infrastructure', href: '/infrastructure' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Digital Proposal', href: '/proposal' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
  },
];
