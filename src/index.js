const puppeteer = require('puppeteer');
const {lougout} = require("./puppeteer/logout");
const {accept, acceptCookie} = require("./puppeteer/acceptCookie");
const {login} = require("./puppeteer/login");

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}




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

        await page.waitForSelector("a#id_l");
        await page.waitForSelector("span#id_n");

        // await page.waitForTimeout(1000);
        let text = await page.$eval("span#id_n", span => {
            return span.textContent
        })

        if (text !== "") {
            await lougout(page,text);
            await page.goto("https://www.bing.com", {waitUntil: 'networkidle0'});
        }

        await login(page);

        // await browser.close()
        console.log("end");
    }catch (err) {
        console.log("error : ")
        await page.screenshot( { path: './screenDebug/tutorialspoint.png' });
    }

})().catch(err => {
    console.log("Error 2 : ", err);
})