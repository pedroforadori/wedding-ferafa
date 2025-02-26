import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary600: "#BCBE8B",
        primary500: "#D1ABA2",
        primary400: "#E6CFC9",
        primary300: "#F7EBDD",
        primary200: "#FFFEF8",
        neutral0: "#EBEBEB",
        neutral10: "#EEEEEE",
        neutral20: "#D9D9D9",
        neutral40: "#8D8D8D",
        neutral50: "#424242",
        greenAux: "#464D43"
      },
      fontFamily: {
        josefin: ["var(--font-josefin)", "sans-serif"],
        amelia: ["ModernSymphony", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
