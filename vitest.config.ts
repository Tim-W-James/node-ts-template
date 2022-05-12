import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    environment: "node",
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
})