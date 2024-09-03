/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#101010", // Existing color
      secondary: "#011d38", // New secondary color
      greyText: "#E9EAEC",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"], // Set default font to Poppins
    },
  },
};
