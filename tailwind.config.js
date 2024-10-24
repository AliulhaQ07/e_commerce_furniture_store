/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Bebas: ["Bebas_Neue", "serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primaryColor: "#E78918",
        offerCard1: "#FEF2F2",
        offerCard2: "#E9F1F4",
      },
    },
  },
  plugins: [],
};
