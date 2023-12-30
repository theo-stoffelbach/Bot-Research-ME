exports.acceptCookie = async (page) => {
    await page.waitForSelector("button#bnp_btn_accept");
    await page.click("button#bnp_btn_accept");

    console.log("accept cookie");
}