import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          blue: '#276CB0',
          'blue-light': '#61ADEC',
          'blue-hover': '#388BD3',
          text: '#F4F8FF',
          surface: '#14213A',
          'surface-hover': '#193247',
          'surface-card': '#1a2d4a',
          'surface-select': '#1e2535',
          'surface-section': '#162D4A',
          'surface-review': '#162331',
          'surface-dropdown': '#1a2744',
          'surface-dropdown-hover': '#1e2f52',
          dark: '#0D1227',
          'dark-alt': '#0D1830',
          'dark-nav': '#0d1117',
          'dark-scrolled': '#0C1525',
          'dark-warning': '#1a1a1a',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
