/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#1e1608",
        night: "#4a3008",
        graphite: "#4b3925",
        "warm-white": "#fffdf4",
        bone: "#ffefc7",
        vellum: "#fff8df",
        gold: "#9c5f00",
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
