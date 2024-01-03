const startResearch = async (page,listResearch) => {

    await page.waitForSelector("div#sb_form_c"); // Test if you're connected
    await page.type("div#sb_form_c",listResearch);
    await page.keyboard.press('Enter');

    await page.waitForTimeout(2000);

    await console.log("Search finish");
    let x = 100;

    let scrollHeight,windowYSize,totalHeight;

    while (x >= 5) {
        const { newTotalHeight, newScrollHeight, newWindowYSize } = await page.evaluate((totalHeight) => {
            window.scrollBy(0, 70);
            const scrollHeight = document.body.scrollHeight;
            const windowYSize = window.innerHeight;
            totalHeight += 70;
            return { newTotalHeight: totalHeight, newScrollHeight: scrollHeight, newWindowYSize: windowYSize };
        }, totalHeight);

        totalHeight = newTotalHeight;
        scrollHeight = newScrollHeight;
        windowYSize = newWindowYSize;

        if (totalHeight >= scrollHeight - windowYSize) break;

        x = Math.round(Math.random() * 100);
        await console.log(x);
        await page.waitForTimeout(100);
    }
    await page.waitForTimeout(2600);

    await page.goto("https://www.bing.com", { waitUntil: 'networkidle2' });
}

export { startResearch };
