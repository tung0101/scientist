/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        primary: {
          // dark: "#2F3338",
          500: "#2F3338",

        },
      },
=======
      "dark": "#2F3338",
      
>>>>>>> 1295295a5b00974e51e1d6eb57a970ac3852ee50
    },
  },
  plugins: [require("tailwind-scrollbar")],
};