import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: true,
    exclude: [
      "node_modules/",
      "src/test/",
      "**/*.d.ts",
      "**/*.config.*",
      "**/dist/",
      "src/components/__tests__/anchor.test.tsx",
      "src/components/__tests__/auto-complete.test.tsx",
      "src/components/__tests__/back-top.test.tsx",
      "src/components/__tests__/calendar.test.tsx",
      "src/components/__tests__/cascader.test.tsx",
      "src/components/__tests__/chart.test.tsx",
      "src/components/__tests__/date-range-picker.test.tsx",
      "src/components/__tests__/form.test.tsx",
      "src/components/__tests__/mentions.test.tsx",
      "src/components/__tests__/message.test.tsx",
      "src/components/__tests__/qrcode.test.tsx",
      "src/components/__tests__/rating.test.tsx",
      "src/components/__tests__/theme-provider.test.tsx",
      "src/components/__tests__/time-picker.test.tsx",
      "src/components/__tests__/tour.test.tsx",
      "src/components/__tests__/tree.test.tsx",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/test/",
        "**/*.d.ts",
        "**/*.config.*",
        "**/dist/",
        "src/main.tsx",
        "src/App.tsx",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
