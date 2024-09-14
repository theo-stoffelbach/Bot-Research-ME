import { config } from "../config/config.js";

const login = async (page) => {

    const email = config.accounts[0].email;
    const password = config.accounts[0].password;

    await page.waitForSelector("span.id_text_signin");
    await page.click("span.id_text_signin");
    await page.waitForTimeout(3000);

    await page.waitForSelector("input[type=\"email\"]"); // page with email input
    await page.type("input[type=\"email\"]",email);

    await page.waitForSelector('div.ext-button-item');
    await page.click('div.ext-button-item');

    await page.waitForTimeout(1000);

    await page.waitForSelector("input[type=\"password\"]"); // page with password input
    await page.type("input[type=\"password\"]",password);

    await page.waitForSelector('div.ext-button-item');
    await page.click('div.ext-button-item');

    await page.waitForTimeout(1000);

    await page.click("button[type=\"submit\"]");


    // bnp_btn_accept

    await console.log("log in with " + email)

}

export { login };
