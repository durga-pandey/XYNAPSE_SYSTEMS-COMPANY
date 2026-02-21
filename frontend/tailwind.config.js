/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', "cursive"],
        tiro: ['"Tiro Devanagari Hindi"', "serif"],
        noto: ['"Noto Sans Devanagari"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        oswald: ["Oswald", "sans-serif"],
        firasans: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
