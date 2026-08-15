import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#07070C",
        surface: "#0F0F17",
        surface2: "#13131D",
        edge: "rgba(255,255,255,0.08)",
        "edge-hi": "rgba(255,255,255,0.16)",
        glass: "rgba(255,255,255,0.045)",
        "glass-hi": "rgba(255,255,255,0.08)",
        violet: { DEFAULT: "#8B5CF6", 2: "#A78BFA" },
        azure: { DEFAULT: "#3B82F6", 2: "#60A5FA" },
        ink: "#F5F5F7",
        mist: { DEFAULT: "#9497A6", dim: "#63636F" },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      spacing: {
        18: "72px",
      },
      borderRadius: {
        "4xl": "32px",
      },
      backgroundImage: {
        "bond-gradient": "linear-gradient(135deg, #8B5CF6, #3B82F6)",
        "bond-text": "linear-gradient(120deg, #A78BFA, #60A5FA)",
      },
      boxShadow: {
        glow: "0 8px 24px -8px rgba(139,92,246,0.5)",
        card: "0 20px 40px -10px rgba(0,0,0,0.5)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse2: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        wv: {
          "0%,100%": { height: "6px" },
          "50%": { height: "26px" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        pulse2: "pulse2 2s infinite",
        wv: "wv 1.2s ease-in-out infinite",
        spin: "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
