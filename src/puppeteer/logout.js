exports.logout = async (page) => {
    let isAlreadyAnAccount = true;

    while(isAlreadyAnAccount) {
        await page.waitForSelector("div.id_signout"); // Test if you're connected
        await page.click("div.id_signout");

        await page.waitForTimeout(3000);

        const isProfessionalAccount = await page.$('input#b_signout');

        if (isProfessionalAccount) {
            await page.click('input#b_signout');
            await console.log("log out Professional account")
            await page.waitForTimeout(100);
            await page.goto("https://www.bing.com/");
            await page.waitForTimeout(100);
            await page.goto("https://www.bing.com/");
        }else {
            await console.log("log out Personal Account")
        }

        await page.waitForTimeout(1000);

        await page.waitForSelector("a.id_button");
        await page.click("a.id_button");

        await page.waitForTimeout(3000);

        isAlreadyAnAccount = await page.$('div.id_signout');
    }
}