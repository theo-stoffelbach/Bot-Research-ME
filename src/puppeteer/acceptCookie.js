const acceptCookie = async (page) => {
    await page.waitForTimeout(1500);

    const isButtonToAccept = await page.$('button#bnp_btn_accept');

    if (isButtonToAccept) {
        await page.click("button#bnp_btn_accept");
        printSuccess("cookie accepted");
    }else {
        printSuccess("cookie already accepted");
    }
}

export { acceptCookie };
