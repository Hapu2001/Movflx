/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "blue-darken":"#252631",
          "black-color":"#12151e",
          "yellow-color":'#e4d804'

      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'banner':"url('/src/assets/home/s_slider_bg.jpg')",
        'home_bg02': "url('/src/assets/home/ucm_bg02.jpg')",
        'slider_img02':"url('/src/assets/home/slider_img02.jpg')"
        

      }

    },
  },
  plugins: [],
}