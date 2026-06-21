export type Testimonial = {
  quote: string;
  author: string;
  relation: string;
};

// NOTE: These are illustrative placeholder quotes written to show the layout.
// Replace them with real, consented parent quotes before going live.
export const testimonials: Testimonial[] = [
  {
    quote:
      'My daughter actually looks forward to school now. The teachers know her by name and tell us exactly how she is doing.',
    author: 'A parent',
    relation: 'Grade 3',
  },
  {
    quote:
      'What stood out on our campus visit was how calm and well-organised everything felt. We could picture our son here.',
    author: 'A parent',
    relation: 'Grade 1',
  },
  {
    quote:
      'There is a real balance here. Studies are taken seriously, but sport, music and confidence get attention too.',
    author: 'A parent',
    relation: 'Grade 6',
  },
  {
    quote:
      'The admissions team answered every question patiently and never rushed us. That trust made the decision easy.',
    author: 'A parent',
    relation: 'Grade 4',
  },
];
