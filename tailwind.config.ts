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
          50: "#f0fafa",
          100: "#d7f0f0",
          200: "#b0e2e2",
          300: "#7fcdcd",
          400: "#4bb0b0",
          500: "#309494",
          600: "#237878",
          700: "#1e6161",
          800: "#1c4e4e",
          900: "#1a4141",
          950: "#0c2626",
        },
        sand: {
          50: "#faf8f4",
          100: "#f3efe6",
          200: "#e6dcc9",
          300: "#d5c4a3",
          400: "#c1a677",
          500: "#b39159",
          600: "#a17d4d",
          700: "#856541",
          800: "#6d533a",
          900: "#5a4531",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(12,38,38,0.06), 0 8px 24px rgba(12,38,38,0.06)",
        cardHover: "0 2px 6px rgba(12,38,38,0.08), 0 16px 40px rgba(12,38,38,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
