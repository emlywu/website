/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**.js", './src/**.jsx', './src/components/**.jsx'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
  }
}

