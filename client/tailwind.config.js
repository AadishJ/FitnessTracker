/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backPurple: "#180030",
        lightPurple: "#502B75",
        brightPurple: "#7F00FF", 
        profilePurple: "#8900E5",
        textPurple: "#8000FF",
        newPurple: "#7F00FF",
        anotherPurple: "#2E005C",
        somePurple: "#5800B0",
        footerPurple: "#26023F",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },plugins: [
        require('tailwind-scrollbar'),
      ],
    },
  },
  plugins: [],
}