/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        scrollHorizontal: {
          '0%': { left: '100%' },
          '100%': { left: '-100%' },
        },
      },
      animation: {
        'scroll-primary': 'scrollHorizontal 20s linear infinite',
        'scroll-secondary': 'scrollHorizontal 20s linear infinite 10s',
      },
      colors: {
        primary: '#1B6C8C',
        secondary: '#006838',
      }
    },
  },
  plugins: [],
}