import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff1f4',
          100: '#dce0e7',
          200: '#bdc5d1',
          300: '#95a2b6',
          400: '#647693',
          500: '#3a5176',
          600: '#14305c',
          700: '#11284d',
          800: '#0e213f',
          900: '#0a1930',
        },
        ink: {
          DEFAULT: '#14305c',
          soft: '#566074',
          muted: '#8b94a6',
        },
        gold: {
          50: '#fef8e6',
          100: '#fdf2d1',
          200: '#fbe7ac',
          300: '#f7d66e',
          400: '#f4c430',
          500: '#d6aa2e',
          600: '#b8902b',
          700: '#937322',
        },
        red: {
          50: '#fce8e9',
          100: '#f9d1d3',
          200: '#f4a8ab',
          300: '#ed767a',
          400: '#e6444a',
          500: '#e11b22',
          600: '#c6181e',
          700: '#a61419',
        },
        leaf: {
          50: '#eef8f1',
          100: '#d2eeda',
          400: '#4aa872',
          500: '#3a9061',
          600: '#2c714c',
        },
        slatey: {
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
        },
        mist: '#f4f7fb',
        cloud: '#eef2f8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      borderRadius: {
        btn: '16px',
        'btn-sm': '4px',
      },
      boxShadow: {
        soft: '0 2px 10px -2px rgba(10, 36, 64, 0.10)',
        card: '0 10px 30px -12px rgba(10, 36, 64, 0.16)',
        lift: '0 22px 48px -20px rgba(10, 36, 64, 0.28)',
        ring: '0 0 0 1px rgba(10, 36, 64, 0.06)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        marquee: 'marquee 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
