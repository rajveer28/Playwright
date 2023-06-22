import { expect, test } from "@playwright/test";
import { Page } from "playwright-firefox";

// for (let index = 0; index < 5; index++) {

test.describe.configure({ mode: "parallel" })


test.beforeEach(async ({ page }) => {
    await page.goto("/")
    await page.waitForSelector(`//span[text()="My files"]`, { state: "visible" })
    await page.click(`//span[text()="My files"]`)
    await page.waitForSelector(`//p[text()="My files"]`, { state: "visible" })
});


test.describe('crreating new files', () => {

    test(`circle`, async ({ page }) => {

        await page.waitForSelector(`//button[@id="createFileButton"]`)
        await page.click(`//button[@id="createFileButton"]`)
        await page.waitForSelector(`//input[@id="fileName"]`)

        let fileNameRandom = await randomnameFInd("circle")

        await page.type(`//input[@id="fileName"]`, `${fileNameRandom}`)
        await page.waitForSelector(`//button[@data-component="submit-button"]`)
        await page.click(`//button[@data-component="submit-button"]`)
        // xenon

        await page.waitForSelector(`#draw`, { state: "visible" })
        const elementHandle = await page.$("#draw")
        const frame = await elementHandle?.contentFrame()

        await frame?.waitForSelector(`//textarea[@data-object-name="CL_Textarea"]`)
        await frame?.click(`//textarea[@data-object-name="CL_Textarea"]`)
        await page.waitForTimeout(1000)
        await frame?.type(`//textarea[@data-object-name="CL_Textarea"]`, "line")
        await page.waitForTimeout(3000)
        await page.keyboard.press('Enter')
        await page.waitForTimeout(10000)

        const commandline_prompt = frame?.$(`//span[@data-object-name="CommandLineOptions"]`);
        await expect(commandline_prompt).toContain("Options: Segments or");

    });

    test.only(`rectangle `, async ({ page }) => {

        await page.waitForSelector(`//button[@id="createFileButton"]`)
        await page.click(`//button[@id="createFileButton"]`)
        await page.waitForSelector(`//input[@id="fileName"]`)

        let fileNameRandom = await randomnameFInd("circle")

        await page.type(`//input[@id="fileName"]`, `${fileNameRandom}`)
        await page.waitForSelector(`//button[@data-component="submit-button"]`)
        await page.click(`//button[@data-component="submit-button"]`)
        // xenon

        await page.waitForSelector(`#draw`, { state: "visible" })
        const elementHandle = await page.$("#draw")
        const frame = await elementHandle?.contentFrame()

        await frame?.waitForSelector(`//textarea[@data-object-name="CL_Textarea"]`)
        await frame?.click(`//textarea[@data-object-name="CL_Textarea"]`)
        await page.waitForTimeout(1000)
        await frame?.type(`//textarea[@data-object-name="CL_Textarea"]`, "line")
        await page.waitForTimeout(3000)
        await page.keyboard.press('Enter')
        await page.waitForTimeout(10000)

        const commandline_prompt = frame?.$(`//span[@data-object-name="CommandLineOptions"]`);
        await expect(commandline_prompt).toContain("Options: Segments or");

    });

    test(`circle1`, async ({ page }) => {

        await page.waitForSelector(`//button[@id="createFileButton"]`)
        await page.click(`//button[@id="createFileButton"]`)
        await page.waitForSelector(`//input[@id="fileName"]`)

        let fileNameRandom = await randomnameFInd("circle")

        await page.type(`//input[@id="fileName"]`, `${fileNameRandom}`)
        await page.waitForSelector(`//button[@data-component="submit-button"]`)
        await page.click(`//button[@data-component="submit-button"]`)
        // xenon

        await page.waitForSelector(`#draw`, { state: "visible" })
        const elementHandle = await page.$("#draw")
        const frame = await elementHandle?.contentFrame()

        await frame?.waitForSelector(`//textarea[@data-object-name="CL_Textarea"]`)
        await frame?.click(`//textarea[@data-object-name="CL_Textarea"]`)
        await page.waitForTimeout(1000)
        await frame?.type(`//textarea[@data-object-name="CL_Textarea"]`, "line")
        await page.waitForTimeout(3000)
        await page.keyboard.press('Enter')
        await page.waitForTimeout(10000)

        const commandline_prompt = frame?.$(`//span[@data-object-name="CommandLineOptions"]`);
        await expect(commandline_prompt).toContain("Options: Segments or");

    });

    test(`rectangle 1`, async ({ page }) => {

        await page.waitForSelector(`//button[@id="createFileButton"]`)
        await page.click(`//button[@id="createFileButton"]`)
        await page.waitForSelector(`//input[@id="fileName"]`)

        let fileNameRandom = await randomnameFInd("circle")

        await page.type(`//input[@id="fileName"]`, `${fileNameRandom}`)
        await page.waitForSelector(`//button[@data-component="submit-button"]`)
        await page.click(`//button[@data-component="submit-button"]`)
        // xenon

        await page.waitForSelector(`#draw`, { state: "visible" })
        const elementHandle = await page.$("#draw")
        const frame = await elementHandle?.contentFrame()

        await frame?.waitForSelector(`//textarea[@data-object-name="CL_Textarea"]`)
        await frame?.click(`//textarea[@data-object-name="CL_Textarea"]`)
        await page.waitForTimeout(1000)
        await frame?.type(`//textarea[@data-object-name="CL_Textarea"]`, "line")
        await page.waitForTimeout(3000)
        await page.keyboard.press('Enter')
        await page.waitForTimeout(10000)

        const commandline_prompt = frame?.$(`//span[@data-object-name="CommandLineOptions"]`);
        await expect(commandline_prompt).toContain("Options: Segments or");

    });
});

test.afterEach(async ({ page }) => {

});

// }




async function randomnameFInd(helloname: string) {
    let name = `${helloname}` + `__${(Math.random() + 1).toString(36).substring(7)}`
    return name
}