import { images } from './images';

// Brand system for the L. P. Savani Group site.
// Colors mirror the values used in tailwind.config.ts so non-Tailwind contexts
// (inline styles, meta theme-color) stay consistent.
export const brand = {
  colors: {
    primary: '#004b93',
    accent: '#004b93',
    gold: '#d8a23a',
    green: '#3a9061',
    background: '#ffffff',
    text: '#0a2440',
    secondary: '#9ca3af',
    link: '#374151',
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
