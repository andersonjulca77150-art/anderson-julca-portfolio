import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "pages",
  base: process.env.PAGES_BASE || "/",
  publicDir: "../public",
  plugins: [react()],
  build: {
    outDir: "../pages-dist",
    emptyOutDir: true,
  },
});
