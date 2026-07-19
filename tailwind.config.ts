import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F8F4EE",
          light: "#FCFAF6",
          dark: "#EFE9DC",
        },
        forest: {
          DEFAULT: "#173D1A",
          light: "#1F5224",
          dark: "#0A1F0C",
          muted: "#265C2A",
        },
        crimson: {
          DEFAULT: "#8B1A1A",
          light: "#A52020",
          dark: "#5C0F0F",
        },
        gold: {
          DEFAULT: "#B8922A",
          light: "#D4AA4A",
        },
        gold3: "#F0CC78",
      },
      fontFamily: {
        serif: ["Cinzel", "Georgia", "serif"],
        sans: ["Oswald", "system-ui", "sans-serif"],
        display: ["Cinzel", "Georgia", "serif"],
        playfair: ["Playfair Display", "serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/church-building.jpg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulse_slow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        rotatering: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        borderpulse: {
          "0%, 100%": { borderColor: "rgba(184,146,42,0.2)" },
          "50%": { borderColor: "rgba(184,146,42,0.7)" },
        },
        scalein: {
          "0%": { transform: "scale(1.08)", opacity: "0.7" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        float: "float 5s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        shimmer: "shimmer 3.5s linear infinite",
        pulse_slow: "pulse_slow 3s ease-in-out infinite",
        "rotate-ring": "rotatering 8s linear infinite",
        "border-pulse": "borderpulse 4s ease-in-out infinite",
        "scale-in": "scalein 1.2s ease both",
      },
    },
  },
  plugins: [],
};
export default config;
