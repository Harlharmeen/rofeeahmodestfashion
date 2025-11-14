/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          highlight: "#D4A5A5", // Buttons / highlights
          text: "#6B4226", // Text / accents
          base: "#F7EDE2", // Background
        },
      },
    },
  },
  plugins: [],
};
