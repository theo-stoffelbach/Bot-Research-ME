exports.search = async (page) => {

    // div#sb_form_c
    await page.waitForSelector("div#sb_form_c"); // Test if you're connected
    await page.type("div#sb_form_c","Diablo 4 saison 3 les infos qu'on a ");
    await page.keyboard.press('Enter');

    await console.log("Search finish");
}