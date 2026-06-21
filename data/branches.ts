export type Branch = {
  name: string;
  area: string;
  url: string;
  external: boolean;
  current?: boolean;
  blurb: string;
};

// Branch names and links are taken from the L. P. Savani group website.
export const branches: Branch[] = [
  {
    name: 'L. P. Savani School',
    area: 'Palanpor',
    url: '/',
    external: false,
    current: true,
    blurb:
      'Our Palanpor campus on Canal Road, focused on confident, values-led learning for every child.',
  },
  {
    name: 'L. P. Savani Vidhyabhavan',
    area: 'Adajan',
    url: 'https://lpsv.edu.in/',
    external: true,
    blurb: 'One of the founding campuses of the group, located in the heart of Adajan.',
  },
  {
    name: 'L. P. Savani International',
    area: 'Pal',
    url: 'https://lpsipal.edu.in/',
    external: true,
    blurb: 'An international-minded campus at Pal offering a globally aware learning experience.',
  },
  {
    name: 'L. P. Savani Academy',
    area: 'Vesu',
    url: 'https://lpsavesu.edu.in/',
    external: true,
    blurb: 'A vibrant academy in Vesu balancing academics, sport and the creative arts.',
  },
  {
    name: 'L. P. Savani Riverside School',
    area: 'Dabholi',
    url: 'https://lpsavani.org/Contact',
    external: true,
    blurb: 'A welcoming neighbourhood campus serving families in and around Dabholi.',
  },
  {
    name: 'L. P. Savani Sanskar Valley',
    area: 'Mota Varachha',
    url: 'https://lpsavani.org/Contact',
    external: true,
    blurb: 'A growing campus in Mota Varachha rooted in strong values and modern teaching.',
  },
];
