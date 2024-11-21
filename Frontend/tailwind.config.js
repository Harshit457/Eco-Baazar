/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        colombo: ['"Post No Bills Colombo"', 'sans-serif'],
        yatra: ['"Yatra One"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
         // Define the custom font
      },
      colors: {
        tealCustom: 'rgba(10, 80, 87, 1)', // Define a custom color
      },
    },
  },
  plugins: [],
}

