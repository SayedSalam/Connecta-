import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette (from CONNECTA design system)
        brand: {
          violet: "#8B5CF6", // Digital Violet — primary
          blue: "#2563EB",   // Social Blue — secondary
          pink: "#EC4899",   // Neon Pink — accent
        },
        // Semantic tokens driven by CSS variables (see globals.css)
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        rise: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        shimmer: { "0%": { backgroundPosition: "-500px 0" }, "100%": { backgroundPosition: "500px 0" } },
        gradientMove: { "0%,100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        rise: "rise .5s cubic-bezier(.2,.7,.2,1) both",
        shimmer: "shimmer 1.4s infinite linear",
        gradient: "gradientMove 5s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
