/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "app-red": "#FC4747",
        "app-dark-blue": "#10141E",
        "app-light-blue": "#5A698F",
        "app-blue": "#161D2F",
        "app-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
