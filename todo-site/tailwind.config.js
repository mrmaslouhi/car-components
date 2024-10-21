/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily : {
        bigShouldersFont: ['"Big Shoulders Display"', "sans-serif"],
        lexendDecaFont: ['"Lexend Deca"', "sans-serif"]
      },
      colors : {
        brightOrange: "hsl(31, 77%, 52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)"
      }
    },
  },
  plugins: [],
}

