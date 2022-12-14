/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-darken": "#252631",
        "black-color": "#12151e",
        "yellow-color": "#e4d804",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        Roboto: "Roboto",
      },
      boxShadow: {
        footer: "0px 3px 0px 0px rgba(143,143,143,0.14)",
      },
      backgroundImage: {
        banner: "url('/src/assets/home/s_slider_bg.jpg')",
        home_bg02: "url('/src/assets/home/ucm_bg02.jpg')",
        slider_img02: "url('/src/assets/home/slider_img02.jpg')",
        gallery_bg: "url('/src/assets/home/gallery_bg.jpg')",
        toprate_bg: "url('/src/assets/home/tr_movies_bg.jpg')",
        movie_banner: "url('/src/assets/Movie/breadcrumb_bg.jpg')",
        footer_bg: "url('/src/assets/home/footer_bg.jpg')",
      },
      screens: {
        "min-xl": "1030px",
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1200px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1030px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "790px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        spin: "wiggle 1s ease-in-out infinite",
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
