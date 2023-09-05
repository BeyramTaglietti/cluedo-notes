import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#941B0C",
      },
    },
  },
  plugins: [],
} satisfies Config;
