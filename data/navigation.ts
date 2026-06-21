import { schools } from './schools';
import type { IconName } from '@/components/icons';

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

// Campuses grouped by their real board value, in a fixed display order.
// Only non-empty groups are kept, so no board is invented.
export type BoardGroup = { board: string; schools: typeof megaSchools };

const boardOrder = ['CBSE', 'GSEB', 'GSEB & CBSE'];

export const schoolsByBoard: BoardGroup[] = boardOrder
  .map((board) => ({ board, schools: megaSchools.filter((s) => s.board === board) }))
  .filter((g) => g.schools.length > 0);

// Compact "popular parent actions" shown in the Schools mega menu.
// Request Prospectus intentionally points to /contact (no fake download).
export type ParentAction = { label: string; href: string; icon: IconName };

export const parentActions: ParentAction[] = [
  { label: 'Compare Campuses', href: '/schools#compare', icon: 'map' },
  { label: 'Admission Process', href: '/admission-process', icon: 'check' },
  { label: 'Book a Campus Tour', href: '/admissions#tour', icon: 'pin' },
  { label: 'Contact Admission Office', href: '/contact', icon: 'phone' },
  { label: 'Request Prospectus', href: '/contact', icon: 'book' },
];

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
