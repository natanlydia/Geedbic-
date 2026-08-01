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
          darkBlue: "#0B3C5D",
          orange: "#F5A623",
          dark: "#070707ff",
          gray: "#080808ff",
        },
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Gentle up-and-down float
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        // Smooth flip left-to-right and back every 5 s
        flip: {
          "0%, 40%":   { transform: "translateY(var(--float-y, 0px)) rotateY(0deg)" },
          "50%":       { transform: "translateY(var(--float-y, 0px)) rotateY(180deg)" },
          "90%, 100%": { transform: "translateY(var(--float-y, 0px)) rotateY(360deg)" },
        },
        // Combined: float AND flip together
        floatFlip: {
          "0%":    { transform: "translateY(0px)    rotateY(0deg)" },
          "20%":   { transform: "translateY(-12px)  rotateY(0deg)" },
          "40%":   { transform: "translateY(0px)    rotateY(0deg)" },
          "50%":   { transform: "translateY(-6px)   rotateY(90deg)" },
          "60%":   { transform: "translateY(-12px)  rotateY(180deg)" },
          "80%":   { transform: "translateY(-6px)   rotateY(180deg)" },
          "90%":   { transform: "translateY(0px)    rotateY(270deg)" },
          "100%":  { transform: "translateY(0px)    rotateY(360deg)" },
        },
      },
      animation: {
        marquee:   "marquee 35s linear infinite",
        float:     "float 3s ease-in-out infinite",
        floatFlip: "floatFlip 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
