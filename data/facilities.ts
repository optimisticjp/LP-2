export type IconName =
  | 'book'
  | 'beaker'
  | 'monitor'
  | 'cpu'
  | 'bus'
  | 'shield'
  | 'heart'
  | 'utensils'
  | 'music'
  | 'dumbbell'
  | 'building'
  | 'palette';

export type Facility = {
  title: string;
  description: string;
  icon: IconName;
  image: string;
  category: string;
};

// Facility list reflects the facilities published for the L. P. Savani group
// (smart classrooms, library, science and ICT labs, sports, activity rooms, dining).
export const facilities: Facility[] = [
  {
    title: 'Smart Classrooms',
    description:
      'Bright, airy classrooms with digital boards and teaching aids that make every lesson clear and engaging.',
    icon: 'monitor',
    image: '/images/facility-classroom.jpg',
    category: 'Learning',
  },
  {
    title: 'Library & Reading Room',
    description:
      'A calm, well-stocked library that builds a lifelong reading habit and supports independent research.',
    icon: 'book',
    image: '/images/facility-library.jpg',
    category: 'Learning',
  },
  {
    title: 'Science Laboratory',
    description:
      'Hands-on physics, chemistry and biology experiments that turn theory into real understanding.',
    icon: 'beaker',
    image: '/images/facility-science-lab.jpg',
    category: 'Learning',
  },
  {
    title: 'Computer & ICT Lab',
    description:
      'Modern computers and reliable connectivity that build confident, responsible digital skills.',
    icon: 'cpu',
    image: '/images/facility-computer-lab.jpg',
    category: 'Learning',
  },
  {
    title: 'STEM & Robotics Corner',
    description:
      'A maker space for coding, robotics and problem solving that encourages curiosity and invention.',
    icon: 'monitor',
    image: '/images/facility-robotics.jpg',
    category: 'Learning',
  },
  {
    title: 'Sports & Play Areas',
    description:
      'Indoor and outdoor spaces for athletics, team games and daily activity that keep children active.',
    icon: 'dumbbell',
    image: '/images/facility-sports.jpg',
    category: 'Activity',
  },
  {
    title: 'Art, Music & Dance Rooms',
    description:
      'Dedicated studios for art, music and dance where every child finds a way to express themselves.',
    icon: 'palette',
    image: '/images/facility-arts.jpg',
    category: 'Activity',
  },
  {
    title: 'Transport',
    description:
      'A managed bus service with trained staff and planned routes for a safe daily commute.',
    icon: 'bus',
    image: '/images/facility-transport.jpg',
    category: 'Care',
  },
  {
    title: 'Safety & Security',
    description:
      'CCTV coverage, monitored entry and trained staff so children stay safe through the school day.',
    icon: 'shield',
    image: '/images/facility-safety.jpg',
    category: 'Care',
  },
  {
    title: 'Medical Support',
    description:
      'A first-aid and infirmary facility with clear care procedures for everyday needs.',
    icon: 'heart',
    image: '/images/facility-medical.jpg',
    category: 'Care',
  },
  {
    title: 'Dining & Cafeteria',
    description:
      'A clean, supervised dining space that supports healthy eating habits and good routines.',
    icon: 'utensils',
    image: '/images/facility-dining.jpg',
    category: 'Care',
  },
  {
    title: 'Auditorium & Activity Hall',
    description:
      'A spacious hall for assemblies, performances and celebrations that bring the school together.',
    icon: 'building',
    image: '/images/facility-auditorium.jpg',
    category: 'Activity',
  },
];
