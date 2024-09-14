import { logout } from "./logout.js";

const claimRewardResearch = async (page) => {
    console.log("claim reward research");
    await page.waitForSelector('a#id_rh');
    await page.click('a#id_rh');
    await page.waitForTimeout(3000);

    try {
        // await page.waitForSelector('a.joinNowText');
        await page.waitForTimeout(3000);
        const frame = await page.frames().find(frame => frame.url() === 'https://www.bing.com/rewards/panelflyout?&partnerId=BingRewards&date=03/27/2024&ru=https%3A%2F%2Fwww.bing.com%2F');
        await console.log("frame : ", frame);
        const joinNowTextElement = await frame.$('a.joinNowText');
        await console.log("joinNowTextElement : ", joinNowTextElement);
        await joinNowTextElement.click();


    }catch (err) {
        console.log("error claimRewardResearch : " + err);
    }


    console.log("End claim reward research");
}

export { claimRewardResearch };

// https://www.bing.com/rewards/panelflyout?&partnerId=BingRewards&date=03/27/2024&ru=https%3A%2F%2Fwww.bing.com%2F