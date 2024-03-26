import puppeteer from "puppeteer";
import { acceptCookie } from "./acceptCookie.js";

const initPuppeteer = async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        headless: false,
        args: ['--disable-cache'],
    });

    const page = await browser.newPage();

    try {
        await page.goto("https://www.bing.com/");
        await acceptCookie(page);
    }catch (_) {
        console.log("error to find cookie")
    }

    return page;
};

export { initPuppeteer };
