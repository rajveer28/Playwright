import { test } from "@playwright/test";

test('login', async ({ page }) => {
    await page.goto("/")
    await page.waitForSelector(`//input[@id="email"]`, { state: "visible" })
    // await page.locator(`//input[@id="email"]`).clear()
    await page.locator(`//input[@id="email"]`).fill("rajveer.singh+kudoatf@graebert.com")
    await page.waitForSelector(`//button[@type="submit"]`)
    await page.click(`//button[@type="submit"]`)

    await page.waitForSelector('//input[@id="password"]')
    await page.type('//input[@id="password"]', "Rajveer@65")
    await page.waitForSelector(`//button[@type="submit"]`)
    await page.click(`//button[@type="submit"]`)
    await page.waitForNavigation({ waitUntil: "networkidle" })

    await page.waitForSelector(`[data-component="storage-text-samples"]`)
    await page.click(`[data-component="storage-text-samples"]`)

    await page.context().storageState({
        path: 'state.json',
    })
});
