/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // أو حسب الباث عندك
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tw-animate-css"), // ✨ هنا
  ],
};
