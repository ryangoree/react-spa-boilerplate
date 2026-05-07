/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH ?? "/",
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
    },
  },
});
