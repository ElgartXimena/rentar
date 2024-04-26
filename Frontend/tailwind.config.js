/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          blue: "#0077B6",
          lightblue: "#48CAE4",
          violet: "#9747FF",
          black:"#252422",
          lightgray:"#FAFAFA",
          middlegray:"#CCCCCC",
          stronggray:"#A5A5A5",
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-inner-border"),
    require('tailwind-scrollbar'),
    // ...
  ],
}

