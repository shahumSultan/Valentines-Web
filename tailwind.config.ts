import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["'Dancing Script'", "cursive"],
        pacifico: ["'Pacifico'", "cursive"],
      },
      colors: {
        valentine: {
          pink: "#FF6B9D",
          rose: "#FF1744",
          blush: "#FFB3C6",
          cream: "#FFF0F3",
          deeprose: "#C62828",
        },
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(-10vh) scale(1.2)", opacity: "0" },
        },
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        heartBurst: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "1" },
          "60%": { transform: "scale(1.3) rotate(15deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shake: {
          "0%, 100%": { transform: "translate(-50%, -50%) translateX(0)" },
          "25%": { transform: "translate(-50%, -50%) translateX(-6px)" },
          "75%": { transform: "translate(-50%, -50%) translateX(6px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        floatUp: "floatUp linear infinite",
        fadeInScale: "fadeInScale 0.6s ease-out forwards",
        heartBurst: "heartBurst 0.5s ease-out forwards",
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
        shake: "shake 0.25s ease-in-out",
        wiggle: "wiggle 0.3s ease-in-out 3",
      },
    },
  },
  plugins: [],
};

export default config;
