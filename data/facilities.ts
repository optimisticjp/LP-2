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
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_1_06df30211b.png',
    category: 'Learning',
  },
  {
    title: 'ICT Lab',
    description: 'Computer labs that build digital confidence and support technology-enabled learning.',
    icon: 'monitor',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/BRIJ_3c17a8fc3c.png',
    category: 'Learning',
  },
  {
    title: 'Robotics Lab',
    description: 'A space for coding, building and problem solving with hands-on robotics.',
    icon: 'cpu',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0505_4f18198a92.JPG',
    category: 'Learning',
  },
  {
    title: 'Library',
    description: 'Quiet, well-stocked spaces that build a lasting habit of reading and research.',
    icon: 'book',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_9_88d02c90d4.png',
    category: 'Learning',
  },
  {
    title: 'Art & Craft Room',
    description: 'Room to draw, make and imagine, where creativity is given real space.',
    icon: 'palette',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0338_2d2c40359b.JPG',
    category: 'Creative',
  },
  {
    title: 'Music Room',
    description: 'Dedicated rooms for rhythm, voice and instruments across age groups.',
    icon: 'music',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_5_387b5e4935.png',
    category: 'Creative',
  },
  {
    title: 'Dance Studio',
    description: 'Open studios for movement, expression and performance.',
    icon: 'music',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_8_52b975ffba.png',
    category: 'Creative',
  },
  {
    title: 'Auditorium',
    description: 'A stage for assemblies, performances and moments that build confidence.',
    icon: 'building',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_2_80da205f41.png',
    category: 'Creative',
  },
  {
    title: 'Outdoor Sports Ground',
    description: 'Open grounds for athletics, team games and everyday play.',
    icon: 'dumbbell',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_3_6624038779.png',
    category: 'Active',
  },
  {
    title: 'Indoor Play Area',
    description: 'Safe indoor spaces for younger children to move and play in any weather.',
    icon: 'dumbbell',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/THE_STUDIO_SCHOOL_2_6555237ab9.png',
    category: 'Active',
  },
  {
    title: 'Dining Area',
    description: 'Clean, comfortable spaces for meals and a calm break in the day.',
    icon: 'utensils',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0175_8808a7f9b2.JPG',
    category: 'Care',
  },
  {
    title: 'Infirmary & Safety',
    description: 'On-campus care and modern safety measures so children are looked after.',
    icon: 'heart',
    image: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0009_4fcfc109a0.png',
    category: 'Care',
  },
];

export const facilityCategories: { key: FacilityCategory; label: string }[] = [
  { key: 'Learning', label: 'Learning spaces' },
  { key: 'Creative', label: 'Creative spaces' },
  { key: 'Active', label: 'Sports & movement' },
  { key: 'Care', label: 'Safety & care' },
];

export const experiencePillars: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Learning spaces',
    body: 'Spacious classrooms with comfortable, purpose-built furniture that helps students stay focused.',
    icon: 'book',
  },
  {
    title: 'Creative spaces',
    body: 'Art, music and dance rooms where expression is part of everyday school life.',
    icon: 'palette',
  },
  {
    title: 'Sports and movement',
    body: 'Indoor and outdoor spaces that make physical activity a daily habit.',
    icon: 'dumbbell',
  },
  {
    title: 'Safety and care',
    body: 'Infirmary support and modern safety measures across the campus.',
    icon: 'shield',
  },
  {
    title: 'Technology-enabled learning',
    body: 'ICT and robotics labs that bring digital skills into the classroom.',
    icon: 'cpu',
  },
];
