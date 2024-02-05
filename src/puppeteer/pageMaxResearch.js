
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


        // /fd/auth/signin?action=interactive&provider=windows_live_id&src=SoUp_RWNU&sig=&return_url=https%3a%2f%2fwww.bing.com%2fmsrewards%2fapi%2fv1%2fenroll%3fpubl%3dBINGIP%26crea%3dML25SJ%26pn%3dREWARDSHUB%26partnerId%3dBingRewards%26pred%3dtrue%26sessionId%3d%26ru%3dhttps%253a%252f%252fwww.bing.com%252f&Token=1&lw=1&swt=1&noaadredir=1&cobrandid=03c8bbb5-2dff-4721-8261-a4ccff24c81a
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