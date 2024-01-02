const {logout} = require("./logout");
const {login} = require("./login");
exports.manageAccount = async (page) => {
    await page.waitForNavigation({
        waitUntil: 'networkidle0',
    });

    await page.waitForSelector("a.id_button");
    page.click("a.id_button");

    const isNotConnected = await page.$('div.id_signout'); // Test if you're connected
    if (!isNotConnected) {
        console.log("here");
        await logout(page);
        await login(page);
        console.log("finis déconnecté");
    } else {
        let time = new Date();

        console.log("Not found : ");
        await page.screenshot( { path: './screenDebug/NF - '+ time.getTime().toString() + '.png' });
        // console.log('L\'élément n\'existe pas.');
    }

}

