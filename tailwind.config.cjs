/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      background:'#080808',
      crust:'#181926',
      txt:'#cad3f5',
      green:'#a6d189',
      red:'#d20f39',
      white:'#ffffff'
    },
    extend: {},
  },
  plugins: [],
}