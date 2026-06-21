import { images } from './images';

export type GalleryCategory = 'Campus' | 'Labs' | 'Sports' | 'Activities' | 'Arts' | 'Events' | 'Student Life';

export type GalleryItem = {
  src: string;
  caption: string;
  category: GalleryCategory;
};

export const galleryCategories: GalleryCategory[] = [
  'Campus',
  'Labs',
  'Sports',
  'Activities',
  'Arts',
  'Events',
  'Student Life',
];

export const galleryItems: GalleryItem[] = [
  { src: images.heroPrimary, caption: 'A day on campus', category: 'Campus' },
  { src: images.studio1, caption: 'Inside the learning spaces', category: 'Campus' },
  { src: images.gal1, caption: 'Around the school', category: 'Campus' },
  { src: images.gal2, caption: 'Campus life', category: 'Campus' },

  { src: images.facScienceLab2, caption: 'Science laboratory', category: 'Labs' },
  { src: images.facIctLab, caption: 'ICT lab', category: 'Labs' },
  { src: images.adajanLanguage, caption: 'Language lab, Adajan', category: 'Labs' },
  { src: images.facRobotics, caption: 'Robotics lab', category: 'Labs' },

  { src: images.facSportsGround, caption: 'Outdoor sports ground', category: 'Sports' },
  { src: images.adajanSports, caption: 'Sports area, Adajan', category: 'Sports' },
  { src: images.facOutdoorSports, caption: 'On the field', category: 'Sports' },

  { src: images.facActivityRoom, caption: 'Activity room', category: 'Activities' },
  { src: images.facIndoorPlay, caption: 'Indoor play area', category: 'Activities' },
  { src: images.photoArun3, caption: 'Hands-on learning', category: 'Activities' },

  { src: images.facArtRoom, caption: 'Art & craft room', category: 'Arts' },
  { src: images.facMusicRoom2, caption: 'Music room', category: 'Arts' },
  { src: images.facDanceRoom2, caption: 'Dance studio', category: 'Arts' },
  { src: images.facAuditorium, caption: 'Auditorium', category: 'Arts' },

  { src: images.eventIndependence, caption: 'Independence Day celebration', category: 'Events' },
  { src: images.eventCyber, caption: 'Cyber safety awareness session', category: 'Events' },
  { src: images.photoArun6, caption: 'School event', category: 'Events' },

  { src: images.photoArun5, caption: 'Students at work', category: 'Student Life' },
  { src: images.photoArun4, caption: 'Everyday moments', category: 'Student Life' },
  { src: images.photoArun7, caption: 'Friendships and learning', category: 'Student Life' },
  { src: images.heroSecondary, caption: 'Growing together', category: 'Student Life' },
];
