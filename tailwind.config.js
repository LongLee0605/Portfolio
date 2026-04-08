/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-jb)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#0a0a0a",
        paper: "#fafafa",
        line: "#e5e5e5",
        muted: "#737373",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-tech":
          "radial-gradient(at 40% 20%, rgba(34,211,238,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139,92,246,0.15) 0px, transparent 45%), radial-gradient(at 0% 50%, rgba(34,211,238,0.08) 0px, transparent 40%)",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(0,0,0,0.06), 0 8px 24px -8px rgba(0,0,0,0.08)",
        lift: "0 12px 40px -12px rgba(0,0,0,0.12)",
        glow: "0 0 60px -12px rgba(34, 211, 238, 0.35)",
        "glow-violet": "0 0 50px -10px rgba(139, 92, 246, 0.35)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.33, 1, 0.68, 1)",
      },
    },
  },
  plugins: [],
};
