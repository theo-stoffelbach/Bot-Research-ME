import puppeteer from "puppeteer";
import { acceptCookie } from "./acceptCookie.js";

const initPuppeteer = async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        headless: false,
    });

    const page = await browser.newPage();

    try {
        await page.goto("https://www.bing.com", { waitUntil: 'networkidle0' });
        try {
            await acceptCookie(page);
        }catch (_) {
            console.log("error to find cookie")
        }
    } catch (err) {
        let time = new Date();
        console.log("error : " + err);
        await page.screenshot({ path: './screenDebug/error - ' + time.getTime().toString() + '.png' });
    }

    return page;
};

export { initPuppeteer };
