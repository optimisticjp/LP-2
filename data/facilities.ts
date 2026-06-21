import { images } from './images';
import type { IconName } from '@/components/icons';

export type FacilityCategory = 'Learning' | 'Creative' | 'Active' | 'Care';

export type Facility = {
  title: string;
  description: string;
  icon: IconName;
  image: string;
  category: FacilityCategory;
};

export const facilities: Facility[] = [
  {
    title: 'Science Laboratories',
    description: 'Hands-on labs where curiosity turns into understanding through real experiments.',
    icon: 'beaker',
    image: images.facScienceLab2,
    category: 'Learning',
  },
  {
    title: 'ICT Lab',
    description: 'Computer labs that build digital confidence and support technology-enabled learning.',
    icon: 'monitor',
    image: images.facIctLab,
    category: 'Learning',
  },
  {
    title: 'Robotics Lab',
    description: 'A space for coding, building and problem solving with hands-on robotics.',
    icon: 'cpu',
    image: images.facRobotics,
    category: 'Learning',
  },
  {
    title: 'Library',
    description: 'Quiet, well-stocked spaces that build a lasting habit of reading and research.',
    icon: 'book',
    image: images.facActivityRoom2,
    category: 'Learning',
  },
  {
    title: 'Art & Craft Room',
    description: 'Room to draw, make and imagine, where creativity is given real space.',
    icon: 'palette',
    image: images.facArtRoom,
    category: 'Creative',
  },
  {
    title: 'Music Room',
    description: 'Dedicated rooms for rhythm, voice and instruments across age groups.',
    icon: 'music',
    image: images.facMusicRoom2,
    category: 'Creative',
  },
  {
    title: 'Dance Studio',
    description: 'Open studios for movement, expression and performance.',
    icon: 'music',
    image: images.facDanceRoom2,
    category: 'Creative',
  },
  {
    title: 'Auditorium',
    description: 'A stage for assemblies, performances and moments that build confidence.',
    icon: 'building',
    image: images.facAuditorium,
    category: 'Creative',
  },
  {
    title: 'Outdoor Sports Ground',
    description: 'Open grounds for athletics, team games and everyday play.',
    icon: 'dumbbell',
    image: images.facSportsGround,
    category: 'Active',
  },
  {
    title: 'Indoor Play Area',
    description: 'Safe indoor spaces for younger children to move and play in any weather.',
    icon: 'dumbbell',
    image: images.facIndoorPlay,
    category: 'Active',
  },
  {
    title: 'Dining Area',
    description: 'Clean, comfortable spaces for meals and a calm break in the day.',
    icon: 'utensils',
    image: images.facDining,
    category: 'Care',
  },
  {
    title: 'Infirmary & Safety',
    description: 'On-campus care and modern safety measures so children are looked after.',
    icon: 'heart',
    image: images.facInfirmary,
    category: 'Care',
  },
];

export const facilityCategories: { key: FacilityCategory; label: string }[] = [
  { key: 'Learning', label: 'Learning spaces' },
  { key: 'Creative', label: 'Creative spaces' },
  { key: 'Active', label: 'Sports & movement' },
  { key: 'Care', label: 'Safety & care' },
];

// Campus-experience pillars used on the Infrastructure page.
export const experiencePillars: { title: string; body: string; icon: IconName }[] = [
  { title: 'Learning spaces', body: 'Spacious classrooms with comfortable, purpose-built furniture that helps students stay focused.', icon: 'book' },
  { title: 'Creative spaces', body: 'Art, music and dance rooms where expression is part of everyday school life.', icon: 'palette' },
  { title: 'Sports and movement', body: 'Indoor and outdoor spaces that make physical activity a daily habit.', icon: 'dumbbell' },
  { title: 'Safety and care', body: 'Infirmary support and modern safety measures across the campus.', icon: 'shield' },
  { title: 'Technology-enabled learning', body: 'ICT and robotics labs that bring digital skills into the classroom.', icon: 'cpu' },
];
