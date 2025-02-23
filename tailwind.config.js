/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f5e003',
        secondary: '#d3a238',
        accent: '#e5b611',
      },
    },
  },
  plugins: [],
};