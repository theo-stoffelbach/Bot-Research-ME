import puppeteer from "puppeteer";
import { acceptCookie } from "./acceptCookie.js";
import { manageAccount } from "./managaAccount.js";

const initPuppeteer = async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        headless: false,
    });

    const page = await browser.newPage();

    try {
        await page.goto("https://www.bing.com", { waitUntil: 'networkidle0' });
        await acceptCookie(page);
        // await manageAccount(page);
    } catch (err) {
        let time = new Date();
        console.log("error : " + err);
        await page.screenshot({ path: './screenDebug/error - ' + time.getTime().toString() + '.png' });
    }

    return page;
};

export { initPuppeteer };
