// @ts-check
import { test, expect } from '@playwright/test'

const URL_CAT_IMG_PREFIX =
  'https://cataas.com/cat/gif/says/{firstWord}?fontColor=white'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test('Should has facts ', async ({ page }) => {
  await awaitForTextElAsync(page, 'p')
  const p = await page.getByRole('paragraph')
  const content = await p.textContent()
  await expect(content?.length).toBeGreaterThan(3)
})

test('Should has a text and a well formed url', async ({ page }) => {
  await awaitForTextElAsync(page, 'p')
  const p = await page.getByRole('paragraph')
  const content = await p.textContent()

  const img = await page.getByRole('img')
  const url = await img.getAttribute('src')

  const expectedUrl = URL_CAT_IMG_PREFIX.replace(
    '{firstWord}',
    content?.split(' ', 3)?.join(' ') || ''
  )

  await expect(url).toEqual(expectedUrl)
  await expect(content?.length).toBeGreaterThan(3)
})

async function awaitForTextElAsync(page, el) {
  await page.waitForFunction((el) => {
    const e = document.querySelector(el)
    return e && e.textContent?.trim() !== ''
  }, el)
}
