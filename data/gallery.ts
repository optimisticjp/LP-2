export const galleryCategories = [
  'All',
  'Campus',
  'Classrooms',
  'Events',
  'Sports',
  'Activities',
  'Labs',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, 'All'>;
};

// Captions describe each scene so the gallery feels meaningful.
// Swap the placeholder images for real campus photos — see IMAGE_ASSETS_NEEDED.md.
export const galleryItems: GalleryItem[] = [
  { src: '/images/campus-overview.jpg', alt: 'School building and entrance', caption: 'Our Palanpor campus', category: 'Campus' },
  { src: '/images/gallery-campus-1.jpg', alt: 'Open courtyard at the campus', caption: 'Open spaces to play and gather', category: 'Campus' },
  { src: '/images/about-campus.jpg', alt: 'Campus walkway', caption: 'Calm, safe walkways between blocks', category: 'Campus' },
  { src: '/images/gallery-campus-2.jpg', alt: 'Assembly ground', caption: 'Morning assembly ground', category: 'Campus' },

  { src: '/images/facility-classroom.jpg', alt: 'Students in a smart classroom', caption: 'Learning in a smart classroom', category: 'Classrooms' },
  { src: '/images/gallery-classroom-1.jpg', alt: 'Teacher with young learners', caption: 'Small-group attention in early years', category: 'Classrooms' },
  { src: '/images/gallery-classroom-2.jpg', alt: 'Group activity in class', caption: 'Group work and discussion', category: 'Classrooms' },

  { src: '/images/gallery-event-1.jpg', alt: 'Annual day performance', caption: 'Annual day on stage', category: 'Events' },
  { src: '/images/gallery-event-2.jpg', alt: 'Festival celebration', caption: 'Celebrating festivals together', category: 'Events' },
  { src: '/images/gallery-event-3.jpg', alt: 'Independence day celebration', caption: 'National day celebrations', category: 'Events' },
  { src: '/images/facility-auditorium.jpg', alt: 'School auditorium event', caption: 'Assemblies in the main hall', category: 'Events' },

  { src: '/images/facility-sports.jpg', alt: 'Children playing sport', caption: 'Daily sport and team games', category: 'Sports' },
  { src: '/images/gallery-sports-1.jpg', alt: 'Athletics on the field', caption: 'Sports day on the field', category: 'Sports' },
  { src: '/images/gallery-sports-2.jpg', alt: 'Indoor games', caption: 'Indoor games and fitness', category: 'Sports' },

  { src: '/images/facility-arts.jpg', alt: 'Art and music room', caption: 'Art, music and dance studios', category: 'Activities' },
  { src: '/images/gallery-activity-1.jpg', alt: 'Craft activity', caption: 'Hands-on craft sessions', category: 'Activities' },
  { src: '/images/gallery-activity-2.jpg', alt: 'Club activity', caption: 'Clubs and creative activities', category: 'Activities' },
  { src: '/images/student-life.jpg', alt: 'Students working together', caption: 'Leadership and life skills', category: 'Activities' },

  { src: '/images/facility-science-lab.jpg', alt: 'Science laboratory', caption: 'Experiments in the science lab', category: 'Labs' },
  { src: '/images/facility-computer-lab.jpg', alt: 'Computer lab', caption: 'Digital skills in the ICT lab', category: 'Labs' },
  { src: '/images/facility-robotics.jpg', alt: 'Robotics and STEM corner', caption: 'STEM and robotics in action', category: 'Labs' },
  { src: '/images/gallery-lab-1.jpg', alt: 'Students at a lab bench', caption: 'Curiosity, tested and explored', category: 'Labs' },
];
