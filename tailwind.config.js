/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
      'hero-pattern': "url('/assets/images/hero.png')",
      }
  },
  },
  plugins: [],
}