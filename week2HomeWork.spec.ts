/* Week2 Day2 Assignment: Launch Red Bus and Flipkart in Edge and Firefox Browser Instances.
 Red Bus: https://www.redbus.in 
 Flipkart: https://www.flipkart.com
*/

import { chromium,firefox,test } from "@playwright/test"
test("To launch a Redbus in Firefox browser", async () => {
const browserInstance = await firefox.launch({ headless: false, channel:"firefox" });
const browserContext = await browserInstance.newContext();
const page = await browserContext.newPage();
await page.goto("https://www.redbus.in");
const url =page.url()
console.log (url)
const title = page.title()
console.log(title)
})

test("To launch flipkart in Edge browser", async () => {
const browserInstance = await chromium.launch({ headless: false, channel:"msedge" });
const browserContext = await browserInstance.newContext();
const page = await browserContext.newPage();
await page.goto("https://www.flipkart.com/");
const url =page.url()
console.log (url)
const title = page.title()
console.log(title)
})