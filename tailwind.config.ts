import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#fdf7f7",
          100: "#f6e7e7",
          200: "#e9caca",
          300: "#d7a5a5",
          400: "#bd7172",
          500: "#bd454a",
          600: "#ad3036",
          700: "#a1252b",
          800: "#7f1c22",
          900: "#4f1519",
          950: "#1c0e10",
        },
        sand: {
          50: "#faf9f7",
          100: "#f2f0ec",
          200: "#e3dfd8",
          300: "#cec8be",
          400: "#aaa299",
          500: "#817971",
          600: "#625b55",
          700: "#48433f",
          800: "#302d2a",
          900: "#1c1a19",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(23,17,18,0.06), 0 8px 24px rgba(23,17,18,0.07)",
        cardHover: "0 2px 6px rgba(23,17,18,0.08), 0 16px 40px rgba(161,37,43,0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
