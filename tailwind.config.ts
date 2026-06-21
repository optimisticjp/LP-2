import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5fc',
          100: '#d6e7f7',
          200: '#aecfee',
          300: '#7fb1e3',
          400: '#4d8dd4',
          500: '#2a6cbb',
          600: '#004b93',
          700: '#013c77',
          800: '#06325f',
          900: '#0a2747',
        },
        ink: {
          DEFAULT: '#0a2440',
          soft: '#1d3a5c',
          muted: '#5b7290',
        },
        gold: {
          50: '#fbf6ea',
          100: '#f5e8c8',
          200: '#ecd293',
          300: '#e0b95c',
          400: '#d8a23a',
          500: '#c1882a',
          600: '#9c6b22',
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
        sans: ['var(--font-sans)', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'Montserrat', 'system-ui', 'sans-serif'],
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
        marquee: 'marquee 26s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
