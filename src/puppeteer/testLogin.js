exports.testLogin = async (page) => {

    await page.waitForSelector("span.id_text_signin"); // Test if you're connected
    await page.click("span.id_text_signin");

    await page.waitForTimeout(3000);

    await page.waitForSelector("input[type=\"email\"]"); // Test if you're connected

    await page.waitForSelector("input[type=\"submit\"]"); // Test if you're connected
    await page.click("input[type=\"submit\"]");

    await page.waitForTimeout(1000);

    await page.waitForSelector("input[type=\"password\"]"); // Test if you're connected

    await page.waitForSelector("input[type=\"submit\"]"); // Test if you're connected
    await page.click("input[type=\"submit\"]");

    await page.waitForTimeout(1000);

    await page.click("input[type=\"submit\"]");

}