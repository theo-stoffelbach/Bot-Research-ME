const {logout} = require("./logout");
const {login} = require("./login");
exports.manageAccount = async (page) => {

    await page.waitForSelector("a.id_button");
    await page.click("a.id_button");

    await page.waitForTimeout(3000);
    const isConnected = await page.$('div.id_signout'); // Test if you're connected

    if (isConnected) {
        console.log("Oui")
        await logout(page);
    }

    await login(page);

}