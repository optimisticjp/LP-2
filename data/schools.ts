import { images } from './images';

export type Phone = { label: string; tel: string };

export type School = {
  slug: string;
  name: string;
  shortName: string;
  location: string; // area within Surat
  board: string; // e.g. "GSEB", "CBSE", "GSEB & CBSE"
  established?: string;
  flagship?: boolean;
  tagline: string;
  blurb: string[]; // paraphrased, original copy
  highlights: string[];
  whyThisCampus: { title: string; body: string }[];
  facilities: string[];
  address: string;
  phones: Phone[];
  email?: string;
  mapEmbed: string;
  // Official online presence: either a dedicated site, or the group page.
  officialUrl: string;
  hasDedicatedWebsite: boolean;
  admissionLink: string;
  leadership?: { name: string; role: string }[];
  thumb: string;
  hero: string;
  gallery: string[];
};

// Helper to build a keyless Google Maps embed from a query.
const mapFrom = (q: string) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

export const schools: School[] = [
  {
    slug: 'palanpor',
    name: 'L. P. Savani School, Palanpor',
    shortName: 'Palanpor',
    location: 'Palanpor, Canal Road',
    board: 'CBSE',
    flagship: true,
    established: '2010',
    tagline: 'Yahan Har कल्पना Banegi हकीकत',
    blurb: [
      'Since 2010, L. P. Savani School, Palanpor has nurtured young minds through creativity, values, academic excellence and innovation, in the belief that every child\'s imagination holds the power to shape the future.',
      'With a CBSE-aligned approach that blends academic rigour, innovation and real-world learning, education here is about turning imagination into achievement, where students are encouraged to dream, explore and bring their ideas to life.',
    ],
    highlights: [
      'Educating young minds since 2010',
      'CBSE curriculum aligned with NEP 2020 and NCERT',
      'Creativity, values, academic excellence and innovation',
      'Strong focus on sports and co-curricular activities',
      'Active online admission enquiry for 2026-27',
    ],
    whyThisCampus: [
      { title: 'Academic excellence', body: 'Conceptual, skill-based learning aligned with NEP 2020, NCF and NCERT guidelines.' },
      { title: 'Learning by doing', body: 'Real-life projects and experiential learning that connect classroom ideas to the real world.' },
      { title: 'Values and leadership', body: 'Honesty, discipline, empathy, teamwork and social responsibility woven through everyday school life.' },
      { title: 'Beyond the classroom', body: 'Sports, music, dance, art and cultural programmes that build confidence and character.' },
    ],
    facilities: ['Assembly hall', 'Physics lab', 'Chemistry lab', 'Biology lab', 'Library', 'Sports'],
    address: 'L. P. Savani School, T.P-8, Near Palanpur Jakat Naka, Canal Road, Palanpor, Surat - 394510, Gujarat',
    phones: [{ label: '+91 99049 02626', tel: '+919904902626' }],
    email: 'lpspalanpor@gmail.com',
    mapEmbed: 'https://www.google.com/maps?q=21.213927,72.773263&z=15&output=embed',
    officialUrl: 'https://lpsavanischool.edu.in/',
    hasDedicatedWebsite: true,
    admissionLink:
      'https://lpsavanipalanpor.onlinevidyalaya.net/Pages/OnlineAdmission/AdmissionInquiryForm.aspx?OrgGroupId=2256',
    leadership: [{ name: 'Dr. Kshitij Patel', role: 'Principal' }],
    thumb: images.palanporPhoto,
    hero: images.palanporPhoto,
    gallery: [images.palanporGallery1, images.palanporGallery2, images.palanporGallery4, images.palanporEvent1, images.palanporEvent2, images.palanporEvent3],
  },
  {
    slug: 'adajan',
    name: 'Smt. L. P. Savani Vidhyabhavan, Adajan',
    shortName: 'Adajan',
    location: 'Honey Park Road, Adajan',
    board: 'GSEB & CBSE',
    established: '2002',
    tagline: 'A rich learning environment built around every principle of child development.',
    blurb: [
      'Established in 2002, Smt. L. P. Savani Vidhyabhavan in Adajan offers a learning environment shaped around the mental, physical, emotional and moral growth of every child.',
      'Programmes are designed in line with NEP guidelines and 21st-century skills, balancing academics with a wide range of co-curricular activity so students are ready for a fast-changing world.',
    ],
    highlights: [
      'GSEB and CBSE streams on one campus',
      'NEP-aligned approach with a focus on 21st-century skills',
      'Specialist spaces including a swimming pool, robotics lab and language lab',
      'Play-based early learning with experienced, caring educators',
    ],
    whyThisCampus: [
      { title: 'Two boards, one campus', body: 'Families can choose between GSEB and CBSE streams within the same trusted school.' },
      { title: 'Future-ready skills', body: 'Teaching aligned with the NEP and a clear focus on the skills students will need ahead.' },
      { title: 'Specialist facilities', body: 'A swimming pool, robotics lab, language lab and dedicated music and dance studios.' },
      { title: 'Safe and secure', body: 'Modern safety measures and a structured, supervised environment for younger children.' },
    ],
    facilities: ['Swimming pool', 'Robotics lab', 'Language lab', 'Computer lab', 'Science lab', 'Dance studio', 'Music studio', 'Sports area', 'Cafeteria', 'Activity room'],
    address: 'Smt. L. P. Savani Vidhyabhavan, Honey Park Road, Adajan, Surat - 395009, Gujarat',
    phones: [
      { label: '+91 72010 52525', tel: '+917201052525' },
      { label: '+91 72010 42525', tel: '+917201042525' },
    ],
    email: 'principal.lpsve@lpsavani.org',
    mapEmbed: 'https://www.google.com/maps?q=21.200745,72.781529&z=15&output=embed',
    officialUrl: 'https://lpsv.edu.in/',
    hasDedicatedWebsite: true,
    admissionLink: 'https://lpsv.edunexttechnologies.com/mvc/std/DynamicEnquiryForm',
    leadership: [
      { name: 'Dr. Kshitijkumar M. Patel', role: 'Principal (GSEB)' },
      { name: 'Rajnish Vaishnav', role: 'Principal (CBSE)' },
    ],
    thumb: images.branchAdajan,
    hero: images.heroSecondary,
    gallery: [images.adajanSports, images.adajanScience, images.adajanLanguage, images.adajanMusic, images.photoArun3, images.photoArun5],
  },
  {
    slug: 'pal',
    name: 'L. P. Savani International School, Pal',
    shortName: 'Pal',
    location: 'Pal Gam, Gaurav Path Road',
    board: 'GSEB & CBSE',
    tagline: 'A global learning hub where a multicultural outlook meets academic brilliance.',
    blurb: [
      'L. P. Savani International School in Pal brings a global outlook to everyday learning. A multicultural approach prepares students to be confident and capable in an interconnected world.',
      'The curriculum carries global perspectives and a curiosity for different cultures, supported by spacious classrooms and advanced laboratories that encourage creativity and intellectual curiosity.',
    ],
    highlights: [
      'GSEB and CBSE streams with an international outlook',
      'Multicultural approach and global perspectives',
      'Spacious classrooms and advanced laboratories',
      'Focus on confident, compassionate, globally aware students',
    ],
    whyThisCampus: [
      { title: 'Global perspective', body: 'A curriculum that looks beyond borders and builds awareness of different cultures.' },
      { title: 'Choice of board', body: 'GSEB and CBSE options to match each family and each child.' },
      { title: 'Advanced facilities', body: 'Spacious classrooms and well-equipped laboratories that stimulate curiosity.' },
      { title: 'Whole-child growth', body: 'An emphasis on character alongside academics, for well-rounded young people.' },
    ],
    facilities: ['Advanced laboratories', 'Spacious classrooms', 'Library', 'Sports facilities', 'Activity spaces', 'Technology-enabled learning'],
    address: 'L. P. Savani International School, Nakshatra Heights, T.P-10 Gaurav Path Road, Behind Pal Gam, Surat - 394510, Gujarat',
    phones: [
      { label: '+91 72018 02525', tel: '+917201802525' },
      { label: '+91 72018 12525', tel: '+917201812525' },
      { label: '+91 76219 90009', tel: '+917621990009' },
    ],
    mapEmbed: mapFrom('L. P. Savani International School, Pal, Surat, Gujarat 394510'),
    officialUrl: 'https://lpsipal.edu.in/',
    hasDedicatedWebsite: true,
    admissionLink: 'https://forms.edunexttechnologies.com/forms/lp-savani-international-surat/enquiry/',
    thumb: images.branchPal,
    hero: images.studio2,
    gallery: [images.studio1, images.facIctLab, images.facScienceLab, images.gal2, images.gal5, images.facAuditorium],
  },
  {
    slug: 'vesu',
    name: 'L. P. Savani Academy, Vesu',
    shortName: 'Vesu',
    location: 'Vesu Canal Road',
    board: 'CBSE',
    tagline: 'Educational innovation and excellence, beyond traditional boundaries.',
    blurb: [
      'L. P. Savani Academy in Vesu is built around innovation and a comprehensive, enriching learning experience. The campus is equipped with well-resourced science and computer labs that support exploration and technological growth.',
      'Experienced faculty guide students through a curriculum that emphasises critical thinking, problem solving and character, preparing young people for a rapidly changing world.',
    ],
    highlights: [
      'CBSE curriculum with a focus on innovation',
      'Well-equipped science and computer laboratories',
      'Emphasis on critical thinking and problem solving',
      'Experienced, dedicated faculty',
    ],
    whyThisCampus: [
      { title: 'Innovation-led', body: 'A learning experience that reaches beyond traditional boundaries.' },
      { title: 'Strong labs', body: 'Well-equipped science and computer labs for hands-on exploration.' },
      { title: 'Thinking skills', body: 'A curriculum built around critical thinking, problem solving and character.' },
      { title: 'Guided growth', body: 'Experienced faculty known for their dedication and expertise.' },
    ],
    facilities: ['Science laboratories', 'Computer labs', 'Smart classrooms', 'Library', 'Sports facilities', 'Activity rooms'],
    address: 'L. P. Savani Academy, Vesu Canal Road, Vesu, Surat - 395009, Gujarat',
    phones: [{ label: '+91 97372 09993', tel: '+919737209993' }],
    mapEmbed: mapFrom('L. P. Savani Academy, Vesu Canal Road, Vesu, Surat, Gujarat 395009'),
    officialUrl: 'https://lpsavesu.edu.in/',
    hasDedicatedWebsite: true,
    admissionLink: 'https://forms.edunexttechnologies.com/forms/lp-savani-academy-vesu/enquiry/',
    thumb: images.branchVesu,
    hero: images.studio5,
    gallery: [images.facScienceLab, images.facIctLab, images.facActivityRoom, images.gal4, images.facAuditorium, images.gal6],
  },
  {
    slug: 'dabholi',
    name: 'L. P. Savani Riverside School, Dabholi',
    shortName: 'Dabholi',
    location: 'LP Savani Road, Dabholi',
    board: 'GSEB',
    tagline: 'A neighbourhood campus rooted in care, values and steady growth.',
    blurb: [
      'L. P. Savani Riverside School in Dabholi is part of the same group tradition of caring, supportive education close to home.',
      'The campus shares the group commitment to academic strength, character and holistic development. Detailed campus information is being added; the admission office is glad to help families in the meantime.',
    ],
    highlights: [
      'GSEB curriculum within the L. P. Savani group',
      'Caring, neighbourhood-focused campus',
      'Shared group approach to values and holistic growth',
      'Admission office available for branch-specific details',
    ],
    whyThisCampus: [
      { title: 'Close to home', body: 'A neighbourhood campus for families in and around Dabholi.' },
      { title: 'Group standards', body: 'The same focus on academics, character and care found across L. P. Savani.' },
      { title: 'Holistic growth', body: 'Learning that looks after the whole child, not just exam results.' },
      { title: 'Personal guidance', body: 'The admission office is happy to walk families through the details.' },
    ],
    facilities: ['Classrooms', 'Library', 'Activity spaces', 'Sports area', 'Facilities vary by campus — contact the office'],
    address: 'L. P. Savani Riverside School, LP Savani Road, Dabholi, Surat - 395004, Gujarat',
    phones: [{ label: '+91 72010 52525', tel: '+917201052525' }],
    mapEmbed: mapFrom('LP Savani Road, Dabholi, Surat, Gujarat 395004'),
    officialUrl: 'https://lpsavani.org/Contact',
    hasDedicatedWebsite: false,
    admissionLink: 'https://lpsavani.org/Contact',
    thumb: images.branchPal,
    hero: images.studio1,
    gallery: [images.gal2, images.facActivityRoom, images.facOutdoorSports, images.gal5],
  },
  {
    slug: 'mota-varachha',
    name: 'L. P. Savani Sanskaar Valley School, Mota Varachha',
    shortName: 'Mota Varachha',
    location: 'Mota Varachha',
    board: 'GSEB',
    tagline: 'Values at the centre, with room for every child to grow.',
    blurb: [
      'L. P. Savani Sanskaar Valley School in Mota Varachha carries the group focus on values, discipline and holistic development.',
      'The campus shares the wider L. P. Savani commitment to academic excellence and character. Detailed campus information is being added; the admission office is glad to help families in the meantime.',
    ],
    highlights: [
      'GSEB curriculum within the L. P. Savani group',
      'A values-centred learning environment',
      'Shared group approach to academics and character',
      'Admission office available for branch-specific details',
    ],
    whyThisCampus: [
      { title: 'Values first', body: 'A campus that puts character and values at the heart of learning.' },
      { title: 'Group standards', body: 'The same trusted approach found across every L. P. Savani campus.' },
      { title: 'Balanced growth', body: 'Academics held together with activity, expression and care.' },
      { title: 'Personal guidance', body: 'The admission office is happy to share branch-specific information.' },
    ],
    facilities: ['Classrooms', 'Library', 'Activity spaces', 'Sports area', 'Facilities vary by campus — contact the office'],
    address: 'L. P. Savani Sanskaar Valley School, Mota Varachha, Surat - 394101, Gujarat',
    phones: [{ label: '+91 99049 62626', tel: '+919904962626' }],
    mapEmbed: mapFrom('Mota Varachha, Surat, Gujarat 394101'),
    officialUrl: 'https://lpsavani.org/Contact',
    hasDedicatedWebsite: false,
    admissionLink: 'https://lpsavani.org/Contact',
    thumb: images.branchVesu,
    hero: images.studio2,
    gallery: [images.gal3, images.facActivityRoom2, images.facOutdoorSports, images.gal6],
  },
];

export const schoolBySlug = (slug: string) => schools.find((s) => s.slug === slug);

export const schoolSlugs = schools.map((s) => s.slug);
