/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#12b0a0',
          dark: '#1e6076'
        },
        secondary: '#baa673',
      }
    },
  },
  plugins: [],
};