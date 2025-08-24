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
        white: '#ffffff',
        black: '#000000',
        'dark-sea-storm': '#001B20',
        'dark-sea-storm-hover': '#193136',
        'sea-storm': '#001E24',
        'sea-storm-hover': '#193439',
        'dark-sea': '#004554',
        'dark-sea-hover': '#195765',
        'sea': '#005669',
        'sea-hover': '#005567',
        azure: '#00B3DB',
        'muted-azure': '#324C52',
        'muted-azure-hover': '#2D4C52',
        'dark-gray': '#D3D9DA',
        'dark-gray-hover': '#BECBCD',
        'bluish-gray': '#D4E1E4',
        'bluish-gray-hover': '#BFD2D6',
        gray: '#ECF0F2',
        'gray-hover': '#BFD2D6',
        background: '#F9FBFB',
      },
      animation: {
        'shine': 'shine 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
