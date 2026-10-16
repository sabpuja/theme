import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  testMatch: 'responsive.spec.mjs',
  timeout: 30_000,
  expect: { timeout: 8_000 },
  workers: 2,
  retries: 0,
  reporter: [['list']],
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'off',
    video: 'off',
    actionTimeout: 8_000
  },
  outputDir: './test-results'
});
