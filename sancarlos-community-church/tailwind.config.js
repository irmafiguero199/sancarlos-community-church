/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7f3', 100: '#e0ece2', 200: '#c3d9c8', 300: '#98bda2',
          400: '#6a9a79', 500: '#487d5a', 600: '#366345', 700: '#2c5039',
          800: '#254030', 900: '#1b4332', 950: '#0d261c',
        },
        gold: {
          300: '#e6c785', 400: '#d9b25f', 500: '#c99a3c', 600: '#a97c2c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
