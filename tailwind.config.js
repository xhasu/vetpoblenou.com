/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.jsx", "./pages/**/*.jsx"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
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
