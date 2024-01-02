const {testLogout} = require("./testLogout");
exports.testManageAccount = async (page) => {

    await page.waitForSelector("a.id_button");
    await page.click("a.id_button");

    const isConnected = await page.$('div.id_signout'); // Test if you're connected

    console.log(isConnected)
    console.log("-----")



    if (isConnected) {
        console.log("Oui")
        await testLogout(page);
        //logout

    }else {
        console.log("Non")
    }

    // a#id_button

}