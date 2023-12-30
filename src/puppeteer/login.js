exports.login = async (page) => {

    const btn = await page.waitForSelector("a.id_button");
    page.evaluate((btn) => {
        // this executes in the page
        btn.click();
    }, btn);

    await page.waitForSelector("li.id_accountItem")
    await page.click("li.id_accountItem");

    await page.waitForSelector("input[type='email'][name='loginfmt']")
    await page.type("input[type='email'][name='loginfmt']","GPEgfd,skf")
}