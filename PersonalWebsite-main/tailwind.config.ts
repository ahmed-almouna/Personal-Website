/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bouncing: {
          "0%": { bottom: "0px" },
          "50%": { bottom: "20px" },
          "100%": { bottom: "0px" },
        },
      },
      animation: {
        bouncing: "bouncing 1s infinite ease-in-out",
      },

      colors: {
        primary: "#000000",
        secondary: "#FFBF69",
      },
    },
  },
  plugins: [],
};
