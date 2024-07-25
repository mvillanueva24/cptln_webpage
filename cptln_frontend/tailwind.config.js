/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        logo_color_1: {
          DEFAULT: "#CD612D",
          600: "#A25F3B",
        },
        logo_color_2: {
          DEFAULT: "#47797A",
          600: "#3C5050",
        },
        logo_color_3: {
          DEFAULT: "#9D1A2E",
          600: "#742732",
        },
        logo_color_4: {
          DEFAULT: "#BBB237",
          600: "#908A42",
        },
      },
    },
  },
  plugins: [],
}

