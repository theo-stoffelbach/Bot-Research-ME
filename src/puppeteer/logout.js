const puppeteer = require('puppeteer');
const {login} = require("./login");

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

exports.logout = async function (page) {

    await page.waitForSelector("div.id_signout");
    let isNotConnected = await page.$('div.id_signout'); // Test if you're connected

    await console.log("---");
    await console.log(isNotConnected);

    while (isNotConnected) {

        await console.log("Start to logOut")
        await page.waitForTimeout(2000);
        await page.waitForSelector("a.b_toggle");

        let ref = await page.$eval("a.b_toggle", async a => {
            if (a.href !== "") {
                return a.href // personal account
            } else {
                await a.click();
                return a; // pro account
            }
        })

        if (typeof ref === "string") {
            await page.goto(ref, {waitUntil: 'networkidle0'});
        } else {
            let dateFormatee = new Date().toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' }).replace(/\//g, '-');
            // await page.screenshot( { path: `./screenDebug/prouve-${dateFormatee}.png` });
            await page.waitForSelector("input#b_signout");

            await page.click("input#b_signout");
        }

        await console.log(ref);

        await page.goto("https://www.bing.com", {waitUntil: 'networkidle0'});

        await page.waitForSelector("a.id_button");
        page.click("a.id_button");


        await page.waitForTimeout(2000);
        isNotConnected = await page.$('div.id_signout'); // Test if you're connected

        await console.log("---");
        await console.log(isNotConnected);
        await console.log("---");
        await page.waitForTimeout(2000);

    }
}