/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#008542",
        darkblue: "#3b5897",
        darkyellow: "#daa625",
        lightgreen: "#28941e",
        dark: "#5b5b5b",
        light: "#ffffff",
        lightgray: "#d1d5db",
        lightblue: "#1573e5",
      }
    },
  },
  plugins: [],
}

