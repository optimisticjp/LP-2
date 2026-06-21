export type GalleryCategory =
  | 'Campus'
  | 'Labs'
  | 'Sports'
  | 'Activities'
  | 'Arts'
  | 'Events'
  | 'Student Life';

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

const bestImages: GalleryItem[] = [
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_2_80da205f41.png',
    caption: 'Campus life at L. P. Savani',
    category: 'Campus',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_8_52b975ffba.png',
    caption: 'Students across campus',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/THE_STUDIO_SCHOOL_2_6555237ab9.png',
    caption: 'Young learners at school',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_3_6624038779.png',
    caption: 'School campus moments',
    category: 'Campus',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_1_06df30211b.png',
    caption: 'Campus facilities',
    category: 'Campus',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_5_387b5e4935.png',
    caption: 'Learning and activities',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_9_88d02c90d4.png',
    caption: 'Everyday school life',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4726_3e55bc28bb.JPG',
    caption: 'Students in activity',
    category: 'Events',
  },
];

const useImages: GalleryItem[] = [
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/medium_lpsavani_pictures_12_fe48eb0ba2.png',
    caption: 'L. P. Savani campus',
    category: 'Campus',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/THE_STUDIO_SCHOOL_0ea48435e2.png',
    caption: 'School learning environment',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0175_8808a7f9b2.JPG',
    caption: 'Campus view',
    category: 'Campus',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0009_4fcfc109a0.png',
    caption: 'School activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0338_2d2c40359b.JPG',
    caption: 'Student activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9916_e6854b7886.JPG',
    caption: 'Sports and movement',
    category: 'Sports',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0017_7531a5f80b.JPG',
    caption: 'Campus event',
    category: 'Events',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0147_25e937ade8.JPG',
    caption: 'School celebration',
    category: 'Events',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9923_7fb8cb887b.JPG',
    caption: 'Students at school',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9604_e95b96ed04.JPG',
    caption: 'Learning moments',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0572_e3ac3a12bc.JPG',
    caption: 'Campus activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0609_673aacb23b.JPG',
    caption: 'School activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9999_2c85d54ed4.JPG',
    caption: 'Students and campus',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9724_d2ea68d5cb.JPG',
    caption: 'Campus life',
    category: 'Campus',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9841_dfc5784c08.JPG',
    caption: 'Student life',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/MG_9685_091e74dcfd.JPG',
    caption: 'School moment',
    category: 'Events',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9810_04149e5aa4.JPG',
    caption: 'Campus activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0505_4f18198a92.JPG',
    caption: 'Students learning',
    category: 'Labs',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9916_8179c354e2.JPG',
    caption: 'Sports activity',
    category: 'Sports',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0067_a89d4b39a3.JPG',
    caption: 'Campus life',
    category: 'Campus',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9596_c47b12b6e0.JPG',
    caption: 'School activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0475_dfab691b91.JPG',
    caption: 'Students at school',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0464_f80ace5370.JPG',
    caption: 'Learning environment',
    category: 'Labs',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9076_7a73eb2f5e.JPG',
    caption: 'Student activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_8939_c6418652cc.JPG',
    caption: 'Campus event',
    category: 'Events',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9959_d122d178dd.JPG',
    caption: 'Student life',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0052_9dd5d2bb57.JPG',
    caption: 'School campus',
    category: 'Campus',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0031_a72aa9a086.JPG',
    caption: 'Campus activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_0176_31ba39d90e.JPG',
    caption: 'School event',
    category: 'Events',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9377_0d5db0c2db.JPG',
    caption: 'School life',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/12_c183eebd08.png',
    caption: 'Campus activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsipal.edu.in/DSC_9103_a2e5c2147e.JPG',
    caption: 'Campus moment',
    category: 'Campus',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/IMG_20221001_WA_0028_8f4414c151.jpg',
    caption: 'School event',
    category: 'Events',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/BRIJ_3c17a8fc3c.png',
    caption: 'Technology-enabled learning',
    category: 'Labs',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/Whats_App_Image_2026_05_04_at_17_53_03_97fa97bd8d.jpeg',
    caption: 'Student achievement',
    category: 'Events',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/Whats_App_Image_2025_12_26_at_15_24_25_eb8609cbe8.jpeg',
    caption: 'Campus activity',
    category: 'Activities',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/Whats_App_Image_2026_05_04_at_18_06_50_30596fa019.jpeg',
    caption: 'School life',
    category: 'Student Life',
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/Whats_App_Image_2025_06_21_at_11_54_06_a04487f221.jpeg',
    caption: 'Students and learning',
    category: 'Student Life',
  },
];

export const galleryItems: GalleryItem[] = [...bestImages, ...useImages];
