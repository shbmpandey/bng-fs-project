/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5a1f1f',    // Your dark brown color
        secondary: '#8b5a2b',  // Your light brown color
        'footer-bg': '#1a1a1a',
        'footer-active': '#FFA726',
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif'], // Default font family
      },
    },
  },
  plugins: [],
}