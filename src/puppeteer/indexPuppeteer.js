const puppeteer = require("puppeteer");
const {acceptCookie} = require("./acceptCookie");
const {manageAccount} = require("./managaAccount");
const {search} = require("./search");

exports.manageAccount = async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        headless: false,
    });

    const page = await browser.newPage();

    try {

        await page.goto("https://www.bing.com", {waitUntil: 'networkidle0'});
        await acceptCookie(page);
        await manageAccount(page);
        await search(page);

    }catch (err) {

        let time = new Date();

        console.log("error : " + err);
        await page.screenshot( { path: './screenDebug/error - '+ time.getTime().toString() + '.png' });
    }

}