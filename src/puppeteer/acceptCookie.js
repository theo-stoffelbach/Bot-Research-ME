const acceptCookie = async (page) => {
    await page.waitForTimeout(1500);

    const isButtonToAccept = await page.$('button#bnp_btn_accept');

    if (isButtonToAccept) {
        await page.click("button#bnp_btn_accept");
        console.log("accept cookie");
    }else {
        console.log("cookie already accepted")
    }
}

export { acceptCookie };
