const COLORS = require("./src/utils/constants/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-top": "0 -6px 30px -5px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "started-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) -6.83%, rgba(219, 156, 156, 0.16) 29.23%, rgba(222, 212, 235, 0.37) 100%)",
      },

      colors: {
        neutral_main: COLORS.neutral.main,
        neutral_grey1: COLORS.neutral.grey1,
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
