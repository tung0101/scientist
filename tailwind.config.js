/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          // dark: "#2F3338",
          500: "#2F3338",

        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};