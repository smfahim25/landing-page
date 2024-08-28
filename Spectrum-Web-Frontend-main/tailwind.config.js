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
        "custom-md": "0px 4px 4px -2px rgba(222, 218, 218, 0.25)",
        "custom-anim": "0px 4px 12px -2px rgba(222, 218, 218, 0.25)",
      },
      screens: {
        xs: "380px",
        "md-lg": "1100px",
        "md-xl": "1400px",
        "3xl": "1700px", // Example breakpoint at 1600px
        "4xl": "1800px", // Example breakpoint at 1600px
        "5xl": "2000px", // Example breakpoint at 1600px
        "6xl": "2500px", // Example breakpoint at 1600px
      },
      background: {
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
