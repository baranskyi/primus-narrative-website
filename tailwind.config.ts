import type { Config } from "tailwindcss";

// Values live as CSS variables in app/globals.css (brand tokens, guidelines 2026).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "var(--pn-burgundy)",
          hover: "var(--pn-burgundy-hover)",
        },
        cream: "var(--pn-cream)",
        ice: "var(--pn-ice)",
        ink: "var(--pn-ink)",
        taupe: "var(--pn-taupe)",
        line: "var(--pn-line)",
      },
      fontFamily: {
        serif: ["var(--pn-font-serif)"],
        sans: ["var(--pn-font-sans)"],
      },
      fontSize: {
        display: ["var(--pn-size-display)", { lineHeight: "0.92" }],
        h2: ["var(--pn-size-h2)", { lineHeight: "1" }],
        h3: ["var(--pn-size-h3)", { lineHeight: "1" }],
        body: ["var(--pn-size-body)", { lineHeight: "1.6" }],
        small: ["var(--pn-size-small)", { lineHeight: "1.5" }],
        label: ["var(--pn-size-label)", { letterSpacing: "var(--pn-tracking-label)" }],
      },
      spacing: {
        gutter: "var(--pn-gutter)",
        section: "var(--pn-section)",
      },
      maxWidth: {
        container: "var(--pn-max)",
      },
      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};

export default config;
