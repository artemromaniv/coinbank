/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#080808',
        crust:'#181926',
        txt:'#cad3f5',
        green:'#a6d189',
        red:'#d20f39',
        white:'#ffffff',
        mauve:'#CBA6F7',
        peach:'#ED8796',
        light_pink:'#F5BDE6'
      },
    },
  },
  plugins: [],
}