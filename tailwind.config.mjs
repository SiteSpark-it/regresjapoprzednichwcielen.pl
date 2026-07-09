/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#20170b",
        night: "#4a3008",
        graphite: "#463626",
        "warm-white": "#fffaf0",
        bone: "#f7e8c6",
        vellum: "#fff6dc",
        gold: "#9a6400",
        "gold-fill": "#f2b92f",
        "gold-soft": "#ffe39a",
        honey: "#ffd35a",
        lemon: "#fff1a8",
        copper: "#b36d20",
        sage: "#9aa88f",
        mist: "#d8c9aa"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(126, 82, 0, 0.14)"
      }
    }
  },
  plugins: []
};
