import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  test: {
    root: "src",
    globals: true,
    reporters: [`verbose`],
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    coverage: {
      reportsDirectory: "../coverage",
      exclude: ["main.tsx", "vite-env.d.ts", "**/types.ts", "vite.config.ts"],
      provider: "v8",
      reporter: ["text", "html", "clover", "json", "lcov"],
      include: ["**/*.ts", "**/*.tsx"],
    },
  },
  plugins: [react()],
});
