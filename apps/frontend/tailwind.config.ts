import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E8621A",
          dark: "#111827",
          soft: "#FEF0E8"
        }
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 55px rgba(0,0,0,.25)"
      }
    }
  },
  plugins: []
};

export default config;
