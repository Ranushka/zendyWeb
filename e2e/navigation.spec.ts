import { test, expect } from '@playwright/test'

const BASE_URL = process.env.VERCEL_URL || 'http://localhost:3000'

test('Navigation flow', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto(BASE_URL + '/')
  // Click a:has-text("About platform")
  await page.locator('a:has-text("About platform")').click()
  await expect(page).toHaveURL(BASE_URL + '/platform')
  // Click a:has-text("Pricing")
  await page.locator('a:has-text("Pricing")').click()
  await expect(page).toHaveURL(BASE_URL + '/pricing')
  // Click a:has-text("Blog") >> nth=0
  await page.locator('a:has-text("Blog")').first().click()
  // Go to http://localhost:3000/blog
  await page.goto(BASE_URL + '/blog')
  // Click a:has-text("Privacy")
  await page.locator('a:has-text("Privacy")').click()
  await expect(page).toHaveURL(BASE_URL + '/privacy-policy')
  // Click a:has-text("Terms")
  await page.locator('a:has-text("Terms")').click()
  await expect(page).toHaveURL(BASE_URL + '/zendy-terms-of-use')
  // Click nav [aria-label="Get Help"] svg
  await page.locator('nav [aria-label="Get Help"] svg').click()
  await expect(page).toHaveURL(BASE_URL + '/')
  // Click text=Springer Nature
  await page.locator('text=Springer Nature').click()
  await expect(page).toHaveURL(BASE_URL + '/publisher/Springer_Nature')
  // Click nav [aria-label="Get Help"] svg
  await page.locator('nav [aria-label="Get Help"] svg').click()
  await expect(page).toHaveURL(BASE_URL + '/')
})
