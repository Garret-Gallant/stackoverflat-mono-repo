/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
      '128': '32rem',
      '144': '36rem',
      },
      borderRadius: {
      '4xl': '2rem',
      }
    },
  plugins: [],
  }
}
