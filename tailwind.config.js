/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        "2xl": "1677px",
      },
      fontFamily: {
        wulkan: ["Bitter", "serif"],
        circular: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#3DA433",
        alter: "#5E6600",
        light: "#EBF0E4",
      },
      aspectRatio: {
        auto: "auto",
        square: "1/1",
        video: "16/9",
      },
      typography: () => ({
        DEFAULT: {},
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
