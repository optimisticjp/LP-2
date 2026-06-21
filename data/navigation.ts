export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Academics', href: '/academics' },
  {
    label: 'Campus Life',
    children: [
      { label: 'Campus & Facilities', href: '/facilities', desc: 'Classrooms, labs, sports, safety' },
      { label: 'Student Life', href: '/student-life', desc: 'Sports, arts, clubs and events' },
      { label: 'Achievements', href: '/achievements', desc: 'Academics, sports and culture' },
      { label: 'Gallery', href: '/gallery', desc: 'Photos from across the campus' },
    ],
  },
  {
    label: 'School Info',
    children: [
      { label: 'Branches', href: '/branches', desc: 'Explore all L. P. Savani campuses' },
      { label: 'Mandatory Disclosure', href: '/mandatory-disclosure', desc: 'Documents and compliance' },
      { label: 'Contact', href: '/contact', desc: 'Reach the admissions office' },
    ],
  },
];

// Flat list used for the footer "quick links" column.
export const footerLinks: NavChild[] = [
  { label: 'About', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Academics', href: '/academics' },
  { label: 'Campus & Facilities', href: '/facilities' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Branches', href: '/branches' },
  { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
  { label: 'Contact', href: '/contact' },
];
