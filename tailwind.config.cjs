/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'custom-background': '#fffffe',
        'custom-secondary': '#e3f6f5',
        'custom-text': '#272343',
        'custom-yellow': '#ffd803',
      },
    },
  },
  plugins: [],
}
