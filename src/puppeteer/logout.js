const logout = async (page) => {
    let isAlreadyAnAccount = true;

    while(isAlreadyAnAccount) {
        await page.waitForSelector("div.id_signout"); // Test if you're connected
        await page.click("div.id_signout");
        await page.waitForTimeout(3000);

        const isProfessionalAccount = await page.$('input#b_signout');

        // span.bnp_btn_accept
        if (isProfessionalAccount) {
            await page.click('input#b_signout');

            const isButtonToAccept = await page.$('button#bnp_btn_accept');

            if (isButtonToAccept) {
                await page.click("button#bnp_btn_accept");
            }

            await console.log("log out Professional account")
            await page.waitForTimeout(100);
            await page.goto("https://www.bing.com/");
            await page.waitForTimeout(100);
            await page.goto("https://www.bing.com/");

            await page.waitForTimeout(1000);
            //test if button exist


            }else {
            await console.log("test signout")
            await console.log("log out Personal Account")
        }

        await page.waitForTimeout(1000);

        await page.waitForSelector("a.id_button");
        await page.click("a.id_button");

        await page.waitForTimeout(3000);

        isAlreadyAnAccount = await page.$('div.id_signout');
    }
}

export { logout };
