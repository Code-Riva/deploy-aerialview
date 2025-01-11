/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        poppins:  ["poppins", "sans-serif"],
      },
      colors: {
        primary: "#2dd4bf",
        dark1: "#030712",
        dark2: "#111827",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
}, 
plugins: [],
};
