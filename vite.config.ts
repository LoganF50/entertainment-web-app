import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const aliases = [
  ["components", "components"],
  ["context", "context"],
  ["data", "data"],
  ["hooks", "hooks"],
  ["icons", "assets/icons"],
  ["interfaces", "interfaces"],
  ["layouts", "layouts"],
  ["pages", "pages"],
  ["providers", "providers"],
  ["utils", "utils"],
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "entertainment-web-app",
  resolve: {
    alias: aliases.map((alias) => ({
      find: `@${alias[0]}`,
      replacement: path.resolve(__dirname, `src/${alias[1]}`),
    })),
  },
});
