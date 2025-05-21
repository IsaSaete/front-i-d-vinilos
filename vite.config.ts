import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    reporters: ["verbose"],
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
    coverage: {
      reportsDirectory: "./coverage",
      exclude: [
        "src/main.tsx",
        "src/vite-env.d.ts",
        "**/types.ts",
        "vite.config.ts",
        "src/setupTests.ts",
        "src/router/lazyPages.tsx",
      ],
      provider: "v8",
      reporter: ["text", "html", "clover", "json", "lcov"],
      include: ["**/*.ts", "**/*.tsx"],
    },
  },
  plugins: [react()],
});
