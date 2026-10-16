import { test, expect } from '@playwright/test';

const themeId = process.env.SABPUJA_STAGING_THEME_ID || '189276291388';
const domain = process.env.SABPUJA_STAGING_BASE_URL || 'https://sabpuja.com';
const pages = [
  '/',
  '/collections/all',
  '/products/aries-mesha-astrological-remedy-kit',
  '/products/daily-puja-kit',
  '/pages/guide?view=archive',
  '/cart'
];
const widths = [320, 390, 430, 768, 1024, 1440, 1920];
const urlFor = (path) => {
  const url = new URL(path, domain);
  url.searchParams.set('preview_theme_id', themeId);
  return url.toString();
};

for (const path of pages) {
  for (const width of widths) {
    test(`staging ${path} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: width < 600 ? 844 : 900 });
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(urlFor(path), { waitUntil: 'domcontentloaded' });

      // Mandatory fail-closed isolation guard: a redirected live page is NOT staging QA.
      const actualTheme = await page.evaluate(() => String(window.Shopify?.theme?.id || ''));
      expect(actualTheme, 'Preview must identify the unpublished theme; never test live as staging').toBe(themeId);

      await expect(page.locator('body')).toBeVisible();
      const metrics = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        document: document.documentElement.scrollWidth,
        title: document.title,
        font: getComputedStyle(document.body).fontFamily
      }));
      expect(metrics.document, 'Unintended horizontal page overflow').toBeLessThanOrEqual(metrics.viewport + 2);
      expect(metrics.title.trim().length, 'Missing page title').toBeGreaterThan(3);
      expect(metrics.font, 'Canonical body font must include Inter').toMatch(/Inter/i);
    });
  }
}

test('Hindi product copy remains readable on staging', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(urlFor('/hi/products/aries-mesha-astrological-remedy-kit'), { waitUntil: 'domcontentloaded' });
  const actualTheme = await page.evaluate(() => String(window.Shopify?.theme?.id || ''));
  expect(actualTheme).toBe(themeId);
  const m = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, body: document.documentElement.scrollWidth }));
  expect(m.body).toBeLessThanOrEqual(m.viewport + 2);
});
