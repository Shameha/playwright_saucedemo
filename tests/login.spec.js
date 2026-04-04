const { chromium } = require("playwright");
// formate01(command diye run korte hobe) : npx playwright test login.spec.js
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name","standard_user");
 await page.waitForTimeout(2000);

  await page.fill("#password","secret_sauce");
 await page.waitForTimeout(2000);
  await page.click("#login-button");
 await page.waitForTimeout(2000);
  // add to cart
  await page.click('button[name="add-to-cart-sauce-labs-backpack"]');
  await page.waitForTimeout(2000);
  // when we choose id or name or else its call selector but when we choose class its call locator
  await page.click('button[data-test="shopping-cart-link"]')
  await page.waitForTimeout(2000);
})();