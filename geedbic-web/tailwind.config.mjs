/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        geedbic: {
          blue: "#0B7DBE",
          orange: "#F5A623",
          dark: "#070707ff",
          gray: "#080808ff",
        },
      },
    },
  },
  // tailwind.config.mjs
extend: {
  colors: {
    geedbic: {
      blue: "#0B7DBE",
      darkBlue: "#0B3C5D",
      orange: "#F5A623",
    },
  },
},

theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
    },
  },

  plugins: [],
};

export default config;

