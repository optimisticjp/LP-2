import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        // Deep navy ink — primary text and dark surfaces
        ink: {
          DEFAULT: '#13233f',
          soft: '#33415c',
          muted: '#5a6b87',
        },
        // Rich royal blue — the lead brand colour
        brand: {
          50: '#eef4fc',
          100: '#d8e6f8',
          200: '#aecbf0',
          300: '#7ba8e4',
          400: '#467fd2',
          500: '#2360b8',
          600: '#1b4d97',
          700: '#173e7c',
          800: '#163a72',
          900: '#13233f',
        },
        // Warm gold — accents, underlines, highlights
        gold: {
          50: '#fbf6e9',
          100: '#f6ead0',
          200: '#ecd29c',
          300: '#e3bd6e',
          400: '#d8a23a',
          500: '#c5872a',
          600: '#a36a21',
        },
        // Muted emerald — used sparingly for trust / success
        leaf: {
          50: '#eef6f1',
          100: '#d4ebdd',
          400: '#3a8d68',
          500: '#2f7d5b',
          600: '#24654a',
        },
        cream: '#f8f6f1',
        mist: '#f3f7fd',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(19,35,63,0.04), 0 8px 24px rgba(19,35,63,0.06)',
        card: '0 2px 6px rgba(19,35,63,0.05), 0 18px 40px rgba(19,35,63,0.08)',
        lift: '0 10px 24px rgba(19,35,63,0.10), 0 24px 60px rgba(19,35,63,0.14)',
      },
      borderRadius: {
        xl: '0.9rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(19,35,63,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(19,35,63,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease both',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
