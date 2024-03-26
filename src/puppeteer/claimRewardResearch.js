const claimRewardResearch = async (page) => {
    console.log("claim reward research");
    await page.waitForSelector('a#id_rh');
    await page.click('a#id_rh');
    await page.waitForTimeout(3000);

    try {
        console.log("click on join now");
        // await page.waitForSelector('a.joinNowText');
        await page.waitForTimeout(3000);
        await page.click('a.joinNowText');
    }catch (err) {
        console.log("error claimRewardResearch : " + err);
    }


    console.log("End claim reward research");
}

export { claimRewardResearch };
