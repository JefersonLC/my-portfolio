import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://jeferson-portfolio.vercel.app/',
  compressHTML: true,
});