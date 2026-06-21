import { images } from './images';

// Brand system for the L. P. Savani Group site.
// Colors mirror the values used in tailwind.config.ts so non-Tailwind contexts
// (inline styles, meta theme-color) stay consistent.
export const brand = {
  colors: {
    primary: '#14305c',
    accent: '#e11b22',
    gold: '#f4c430',
    green: '#3a9061',
    background: '#ffffff',
    text: '#14305c',
    secondary: '#8b94a6',
    link: '#11284d',
  },
  font: {
    family: 'Montserrat',
    googleHref:
      'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap',
  },
  assets: {
    logoLight: images.logoLight,
    logoGroup: images.logoGroup,
    favicon: images.favicon,
    ogImage: images.ogImage,
  },
} as const;
