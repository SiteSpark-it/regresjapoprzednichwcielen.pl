/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        graphite: "#1d232d",
        "warm-white": "#f8f3ea",
        bone: "#efe6d8",
        gold: "#80591e",
        "gold-fill": "#c79a47",
        "gold-soft": "#dfc083",
        mist: "#aeb8c2"
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
