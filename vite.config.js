import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: 'https://ghostflame2153.github.io/cs300-assignment-4-starter/',
  test: {
    environment: "jsdom",
    setupFiles: "./src/test-setup.js"
  }
});
