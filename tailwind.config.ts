import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        'dark-sea-storm': 'var(--dark-sea-storm)',
        'sea-storm': 'var(--sea-storm)',
        'dark-sea': 'var(--dark-sea)',
        azure: 'var(--azure)',
        'muted-azure': 'var(--muted-azure)',
        'dark-gray': 'var(--dark-gray)',
        'bluish-gray': 'var(--bluish-gray)',
        gray: 'var(--gray)',
      },
    },
  },
  plugins: [],
};
export default config;
