/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      scale: {
        "-100": "-1",
      },
    },
  },
  colors: {
    teal: {
      50: "#F7FCFC",
      100: "#EDFAFA",
      200: "#D5F2F2",
      300: "#BCEBEA",
      400: "#91DBDA",
      500: "#68CCCA",
      600: "#54B8B1",
      700: "#3A998C",
      800: "#267A68",
      900: "#155C48",
      950: "#093B28",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
