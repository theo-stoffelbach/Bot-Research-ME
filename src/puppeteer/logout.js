const puppeteer = require('puppeteer');

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

exports.lougout = async function (page, text) {
    while (text !== "") {

        console.log("test")

        const btn = await page.waitForSelector("a.id_button");
        page.evaluate((btn) => {
            // this executes in the page
            btn.click();
        }, btn);

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
            console.log("test: " + ref)
            await page.goto(ref, {waitUntil: 'networkidle0'});

        } else {
            // console.log(text);
            await page.waitForSelector("input#b_signout");
            await page.click("input#b_signout");
        }

        // console.log("\n\n");
        // console.log(ref);
        // console.log("text : " + text);

        await page.goto("https://www.bing.com", {waitUntil: 'networkidle0'});

        text = await page.$eval("span#id_n", span => {
            return span.textContent;
        })

        console.log(text !== "Connexion");
        console.log("error !")
        await console.log(text);
    }
}