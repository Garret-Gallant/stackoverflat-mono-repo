/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      "light-blue": "#5ca5r6",
      "black-blue": "#101820",
      orange: "#e45b44",
      "dark-blue": "#1b2630",
      black: "#030416",
      cyan: "00EFE1",
      white: "#FFFFFF",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
};
