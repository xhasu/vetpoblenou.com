/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.jsx", "./pages/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        wulkan: ["Bitter", "serif"],
        circular: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#3DA433",
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
