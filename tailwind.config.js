/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#e6f7ef',
          100: '#c2ecd8',
          200: '#8fdcb8',
          300: '#5ccb98',
          400: '#29bb78',
          500: '#00a86b', // primary
          600: '#008f5b',
          700: '#00754b',
          800: '#005c3b',
          900: '#00422b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};