const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
const PreviousMap = require('postcss/lib/previous-map');
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(table|checkbox|spacer).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.green,
      middle: colors.violet,
      secondary: colors.orange,
    },
  },
  plugins: [nextui()],
};
