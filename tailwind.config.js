/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1210px",
    },
    fontFamily: {
      sans: ["Fredoka", "ui-sans-serif"],
      serif: ["Inter", "ui-serif"],
      mono: ["Rubik", "ui-monospace"],
    },
    extend: {
      backgrounImage: {
        hero: "url('/heroo.jpg')",
        heroConcert: "url('/concert-1.jpg')"
      },
      colors: {
        purple: {
          50: "#D5D2FE",
          100: "#B1A9FE",
          200: "#6254FD",
          300: "#1803F7",
          400: "#0F029C",
          500: "#070148",
          600: "#050137",
          700: "#04012D",
          800: "#03001E",
          900: "#01000F",
          950: "#000005",
        },
      },
    },
  },
  plugins: [],
}
