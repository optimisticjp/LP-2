// Placeholder community voices. These are intentionally generic and marked for
// the school office to replace with real, consented testimonials. No quotes are
// attributed to specific named individuals.
export type Voice = { quote: string; name: string; role: string };

export const communityVoices: Voice[] = [
  {
    quote:
      'This space is reserved for a parent\u2019s words about their experience with the campus and teachers. The school office can add a real testimonial here.',
    name: 'Parent testimonial',
    role: 'To be added by the school office',
  },
  {
    quote:
      'A short reflection from an alumnus about how their years at L. P. Savani shaped them can sit here, in their own words.',
    name: 'Alumni voice',
    role: 'To be added by the school office',
  },
  {
    quote:
      'A note from a faculty member about the learning culture and the students they teach can be featured in this space.',
    name: 'Faculty voice',
    role: 'To be added by the school office',
  },
];
