/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "dark": "#2F3338",
      colors: {
        'my-color': '#2F3338', 
        'vinh':'#1A1C1E',
        'text-blue':'#6F49FD',
        
      },
    },
   
  },
  plugins: [],
}