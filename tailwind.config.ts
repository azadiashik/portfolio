import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.tsx", "./lib/**/*.ts"],
  theme: { extend: {
    colors: { navy: "#0B1F3A", ink: "#1C2128", paper: "#F6F7F9", rule: "#D5DAE1", steel: "#3E6A8F", mute: "#5B6573" },
    fontFamily: { serif: ["var(--f-serif)", "Georgia", "serif"], sans: ["var(--f-sans)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
