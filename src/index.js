const puppeteer = require('puppeteer');
const {testManageAccount} = require("./puppeteer/testManagaAccount");
const {search} = require("./puppeteer/search");

(async ()=> {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        headless: false,
    });
    console.log("browser on")

    const page = await browser.newPage();

    try {
        console.log("Page on");
        await page.goto("https://www.bing.com", {waitUntil: 'networkidle0'});
        await acceptCookie(page);
        // Check if a user is connected

        // await manageAccount(page);
        await testManageAccount(page);

        await search(page);

        // await browser.close()
        console.log("end");
    }catch (err) {
        let time = new Date();


        console.log("error : " + err);
        await page.screenshot( { path: './screenDebug/error - '+ time.getTime().toString() + '.png' });
    }

})().catch(err => {
    console.log("Error 2 : ", err);
})