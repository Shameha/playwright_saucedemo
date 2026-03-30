const { chromium } = require("playwright");
// formate01
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.fill();
  await page.fill();
  await page.click();
  
})();