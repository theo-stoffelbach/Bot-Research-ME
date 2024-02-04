
const joinProgramReward = async (page) => {
    await page.waitForTimeout(3000);

    await removeStartReward();
    await page.waitForTimeout(3000);

    const isJoinReward = await openReward(page);
    // Refaire un connextion pour que ca marche ^^

    console.log("Reward : ", isJoinReward)
    // if (isJoinReward) {
    //     await page.click('div.joinNow');
    //
    //     await page.waitForSelector('span#id_rc');
    //     await page.click('span#id_rc');
    //
    //     await console.log("Join")
    // }
}

const removeStartReward = async (page) => {
    // const isMenuReward =
    // const isConnected = await page.$('div.id_signout'); // Test if you're connected

}

const openReward = async (page) => {

    await page.waitForTimeout(3000);
    await page.goto("https://rewards.bing.com/pointsbreakdown", {waitUntil: 'networkidle2'})
    await page.waitForTimeout(3000);
    const pElement = await page.$('p[ng-bind-html="$ctrl.pointProgressText"]');
    const pointMax = await page.evaluate(pText => pText.textContent, pElement);

    await console.log("p : ", pointMax.split("/")[1] - pointMax.split("/")[0]);
    return pointMax.split("/")[1] - pointMax.split("/")[0] ;

}


const pageMaxResearch = async (page) => {
    try {
        await page.goto("https://www.bing.com", { waitUntil: 'networkidle2' });

        await page.waitForSelector('span#id_rc');
        await page.click('span#id_rc');

        await joinProgramReward(page);

        await page.goto("https://www.bing.com", { waitUntil: 'networkidle2' })
        return await openReward(page)/3; // Max Research
    }catch (err) {
        let time = new Date();
        console.log("error : " + err);
        await page.screenshot({ path: './screenDebug/error - ' + time.getTime().toString() + '.png' });
    }
}

export { pageMaxResearch };