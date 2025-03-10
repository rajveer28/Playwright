import { test } from '@playwright/test';

const username = process.env.careerFlow_USERNAME ?? '';
const password = process.env.careerFlow_PASSWORD ?? '';

test('test', async ({ page }) => {
  await test.step('Log in', async () => {
    await page.goto('https://app.careerflow.ai/login');
    await page.getByRole('textbox', { name: '* Email' }).click();
    await page.getByRole('textbox', { name: '* Email' }).fill(username);
    await page.getByRole('textbox', { name: '* Password' }).click();
    await page.getByRole('textbox', { name: '* Password' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Close', exact: true }).click();
  });

  await test.step('Resume Builder', async () => {
    await page.getByText('Resume Builder').click();
    await page.getByRole('button', { name: 'plus Create New Resume' }).click();
    await page.getByRole('button', { name: 'start from scratch icon Start' }).click();
    await page.getByRole('button', { name: 'template Careerflow' }).click();
    await page.locator('#rc_select_0').click();
    await page.locator('#rc_select_0').fill('Automation test');
    await page.waitForTimeout(2000)
    await page.locator('#rc_select_0').press('Enter');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('textbox', { name: 'Enter your target job' }).click();
    await page.getByRole('textbox', { name: 'Enter your target job' }).fill('xyz');
    await page.getByRole('button', { name: 'Continue' }).click();
  });
});
