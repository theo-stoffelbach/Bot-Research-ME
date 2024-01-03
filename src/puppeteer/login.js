config = require('../config/config');

exports.login = async (page) => {

    const email = config.accounts[0].email;
    const password = config.accounts[0].password;

    await page.waitForSelector("span.id_text_signin"); // Test if you're connected
    await page.click("span.id_text_signin");

    await page.waitForTimeout(3000);

    await page.waitForSelector("input[type=\"email\"]"); // Test if you're connected
    await page.type("input[type=\"email\"]",email);

    await page.waitForSelector("input[type=\"submit\"]"); // Test if you're connected
    await page.click("input[type=\"submit\"]");

    await page.waitForTimeout(1000);

    await page.waitForSelector("input[type=\"password\"]"); // Test if you're connected
    await page.type("input[type=\"password\"]",password);

    await page.waitForSelector("input[type=\"submit\"]"); // Test if you're connected
    await page.click("input[type=\"submit\"]");

    await page.waitForTimeout(1000);

    await page.click("input[type=\"submit\"]");

    await console.log("log in with " + email)

}