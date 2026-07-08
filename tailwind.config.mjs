/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        night: "#0b1727",
        graphite: "#20242b",
        "warm-white": "#f8f1e7",
        bone: "#eee2d2",
        vellum: "#fbf7ef",
        gold: "#8b6329",
        "gold-fill": "#c29343",
        "gold-soft": "#dfbf7b",
        copper: "#a8663e",
        sage: "#9aa88f",
        mist: "#b8c0c5"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(11, 18, 32, 0.16)"
      }
    }
  },
  plugins: []
};
