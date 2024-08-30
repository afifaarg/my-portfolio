/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101010",         // Existing color
        secondary: "#011d38",       // New secondary color
        greyText: "#E9EAEC"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Set default font to Poppins
      },
    },
  },
};
