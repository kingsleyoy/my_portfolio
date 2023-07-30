/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 1px 2px 0 #393E46",
      },
      backgroundImage: {
        k2: "linear-gradient( 109.6deg,  #232931 11.2%, #000 91.1% )",
      },
    },
  },
  plugins: [],
};
// bac: {
//   k2: "linear-gradient( 109.6deg,  #000 11.2%, #000 91.1% )",
// },
