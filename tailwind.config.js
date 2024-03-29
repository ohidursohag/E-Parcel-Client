/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      railway: ["Raleway", "sans-serif"],
      "Black-Ops-One": ["Black Ops One", "system-ui"],
    },
  },
  plugins: [require("daisyui")],
};


