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
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".text-heading-xs": { fontSize: "1.125rem", fontWeight: "500" },
        ".text-heading-sm": { fontSize: "1.5rem", fontWeight: "500" },
        ".text-heading-md": { fontSize: "1.5rem", fontWeight: "300" },
        ".text-heading-lg": { fontSize: "2rem", fontWeight: "300" },
        ".text-body-md": { fontSize: "0.938rem", fontWeight: "300" },
        ".text-body-sm": {
          fontSize: "0.813rem",
          fontWeight: "300",
        },
      });
    },
  ],
};
