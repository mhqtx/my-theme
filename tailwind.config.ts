import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-dark":
          "radial-gradient(rgb(58 58 58) 1px, rgba(0, 0, 0, 0.8) 1px)",
        "hero-white": "radial-gradient(#a9a9a9 1px, #ffffff 1px)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "5": "40px 40px",
      },
      colors: {
        foreground: {
          primary: "rgb(var(--color-foreground-primary) / 1)",
          ["accent-1"]: "rgb(var(--color-foreground-accent-1) / 1)",
          ["accent-2"]: "rgb(var(--color-foreground-accent-2) / 1)",
        },
        primary: "rgb(var(--color-primary) / 1)",
        secondary: "rgb(var(--color-secondary) / 1)",
        tertiary: "rgb(var(--color-tertiary) / 1)",

        main: "#faf0e6",
        grays: {
          1: "#f7f7f7",
          2: "#2b2b2b",
        },
      },
      spacing: {
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "5": "40px",
        "6": "48px",
        "7": "56px",
        "8": "64px",
        "9": "72px",
        "10": "80px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
