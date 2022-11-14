const puppeteer = require('puppeteer');

puppeteer.launch({headless:false,args: [`--window-size=1024,800`],}).then(async browser => {
//   browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');
  // 其他操作...
  await browser.close();
});