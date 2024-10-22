/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF7F50',
          600: '#FF6347',
        },
        red: {
          800: '#8B0000',
        },
        brown: {
          500: '#8B4513',
        },
        green: {
          600: '#2E8B57',
          700: '#228B22',
        },
        amber: {
          400: '#FFD700',
        },
      },
    },
  },
  plugins: [],
};