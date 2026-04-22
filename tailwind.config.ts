import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111014",
          2: "#2a2730",
        },
        bone: {
          DEFAULT: "#f3efe7",
          2: "#e9e3d6",
        },
        paper: "#faf7f0",
        rule: "rgba(17, 16, 20, 0.1)",
        mute: "#6b6459",
        accent: {
          DEFAULT: "#f73298",
          ink: "#e02b8a",
        },
        sage: "#6b7a5a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      fontSize: {
        display: ["clamp(64px, 10vw, 148px)", { lineHeight: "0.9", letterSpacing: "-0.025em" }],
        hero: ["clamp(40px, 5.5vw, 84px)", { lineHeight: "0.95", letterSpacing: "-0.022em" }],
        "mono-xs": ["10px", { letterSpacing: "0.14em" }],
        "mono-sm": ["11px", { letterSpacing: "0.14em" }],
      },
      letterSpacing: {
        tightest: "-0.025em",
      },
    },
  },
  plugins: [],
};

export default config;
