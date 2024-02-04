async function scroll(page) {
    let scrollHeight,windowYSize,totalHeight;
    let x = 100;
    while (x >= 10) {
        const { newTotalHeight, newScrollHeight, newWindowYSize } = page.evaluate((totalHeight) => {
            window.scrollBy(0, 70);
            const scrollHeight = document.body.scrollHeight;
            const windowYSize = window.innerHeight;
            totalHeight += 70;
            return { newTotalHeight: totalHeight, newScrollHeight: scrollHeight, newWindowYSize: windowYSize };
        });

        totalHeight = newTotalHeight;
        scrollHeight = newScrollHeight;
        windowYSize = newWindowYSize;

        if (totalHeight >= scrollHeight - windowYSize) break;

        x = Math.round(Math.random() * 100);
        await page.waitForTimeout(100);
    }
}

const startResearch = async ( page, listResearch ) => {
    await page.goto("https://www.bing.com", { waitUntil: 'networkidle2' })
    await page.waitForTimeout(3000);
    const numberSearch = listResearch.length;
    let searchNumberNow = 0;
    for (const research of listResearch) {
        await page.waitForSelector("div#sb_form_c"); // Test if you're connected
        await page.type("div#sb_form_c", research);
        await page.keyboard.press('Enter');

        await page.waitForTimeout(2000);

        await scroll(page);
        searchNumberNow++;
        await console.log(`Search finish :${searchNumberNow}/${numberSearch}`);

        await page.waitForTimeout(5000);

        await page.goto("https://www.bing.com", { waitUntil: 'networkidle2' })
        await page.waitForTimeout(2500);
    }
}

export { startResearch };
