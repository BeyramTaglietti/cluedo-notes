import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      gradient: {
        "0%": { transform: "background-position: 0% 50%" },
        "50%": { transform: "background-position: 100% 50%" },
        "100%": { transform: "background-position: 0% 50%" },
      },
    },
  },
  plugins: [],
} satisfies Config;
