const openReward = async (page) => {
    // id_rc
    await page.waitForSelector("span#id_rc");
    await page.click("span#id_rc"); // Button reward

    // css-128

    const selector = "a.root-127";
    const hrefValue = await page.evaluate((test) => {
        return document.querySelector(test);
    },selector);

    await console.log("hrefValue : ")
    await console.log(hrefValue)
    await page.waitForTimeout(1500);
    // await page.waitForSelector("a.root-127");
    // await page.click("a.ms-Link.gb_bc.root-127");
    // open reward dashboard

    //test if reward is activate

    // await page.waitForSelector("a.joinNowText");
    // await page.click("a.joinNowText");

    // a.joinNowText
}

const pageMaxResearch = async (page) => {
    try {
        await page.goto("https://www.bing.com", { waitUntil: 'networkidle2' })

        // const hrefValue = await page.evaluate((selector) => {
        //     return document.querySelector(selector);
        // })


        await openReward(page);

        // joinNowText

        const popSideStartReward = await page.$('a.joinNowText');

        if (popSideStartReward) {
            await page.click("a.joinNowText");
            await openReward(page);
        }

        // button[type="button"]._1XuCi2WhiqeWRUVp3pnFG3.erL690_8JwUW-R4bJRcfl

    }catch (err) {
        let time = new Date();
        console.log("error : " + err);
        await page.screenshot({ path: './screenDebug/error - ' + time.getTime().toString() + '.png' });
    }
}

export { pageMaxResearch };