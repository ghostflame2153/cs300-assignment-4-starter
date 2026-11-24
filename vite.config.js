import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/cs300-assignment-4-starter/',
  plugins: [react()],

  test: {
    environment: "jsdom",
    setupFiles: "./src/test-setup.js"
  }
});