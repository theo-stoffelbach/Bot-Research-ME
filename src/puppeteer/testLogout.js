exports.testLogout = async (page) => {

    await page.waitForSelector("div.id_signout");
    await page.click("div.id_signout")

    const isConnected = await page.$('input#b_signout'); // Test if you're connected

    if (isConnected)
        isConnected.click();



    
}