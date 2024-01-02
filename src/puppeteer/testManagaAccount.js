const {testLogout} = require("./testLogout");
exports.testManageAccount = async (page) => {

    await page.waitForSelector("a.id_button");
    await page.click("a.id_button");

    await page.waitForTimeout(3000);
    const isConnected = await page.$('div.id_signout'); // Test if you're connected

    await console.log(isConnected)
    await console.log("-----")


    if (isConnected) {
        console.log("Oui")
        await testLogout(page);
    }else {
        console.log("Non")
    }

    // a#id_button

}