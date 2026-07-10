/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#19150c",
        night: "#2d2718",
        graphite: "#3e372b",
        "warm-white": "#fffdf4",
        bone: "#ffefc7",
        vellum: "#fff8df",
        gold: "#835700",
        "gold-fill": "#f5b51f",
        "gold-soft": "#ffe594",
        honey: "#ffc928",
        lemon: "#fff2a8",
        copper: "#b36d20",
        sage: "#9aa88f",
        mist: "#d8c9aa"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(126, 82, 0, 0.14)",
        glow: "0 24px 60px rgba(245, 181, 31, 0.32)"
      }
    }
  },
  plugins: []
};
