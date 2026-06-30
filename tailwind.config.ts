import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        brand: {
          green: "#1a6b2f",
          "green-dark": "#125021",
          "green-light": "#2a8c42",
          gold: "#e8a020",
          "gold-dark": "#c9871a",
          cream: "#fafaf7",
        },
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(26, 107, 47, 0.12)",
        card: "0 8px 30px -12px rgba(18, 80, 33, 0.18)",
        glow: "0 10px 40px -10px rgba(232, 160, 32, 0.35)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(26,107,47,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,107,47,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
