import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  test: {
    globals: true,
    globalSetup: "tests/setup.ts",
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      include: [
        "components/**/*.{vue}",
        "pages/**/*.{vue}",
        "utils/**/*.{js,ts}",
      ],
      exclude: [],
      all: true,
    },
  },
  resolve: {
    alias: {},
  },
});
