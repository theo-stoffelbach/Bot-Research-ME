async function scroll(page) {
    let scrollHeight,windowYSize,totalHeight;
    let x = 100;
    console.log("Scroll Beging");

    while (x >= 5) {
        console.log("Scroll Trigger");
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
        console.log(x);
        await page.waitForTimeout(100);
        console.log("SCROLL !!")
    }
}

const startResearch = async ( page, listResearch ) => {
    await page.goto("https://www.bing.com", { waitUntil: 'networkidle2' })
    await page.waitForTimeout(3000);

    for (const research of listResearch) {
        await page.waitForSelector("div#sb_form_c"); // Test if you're connected
        await page.type("div#sb_form_c", research);
        await page.keyboard.press('Enter');

        await page.waitForTimeout(2000);

        await scroll(page);
        await console.log("Search finish");

        await page.waitForTimeout(2600);

        await page.goto("https://www.bing.com", { waitUntil: 'networkidle2' })
    }
}

export { startResearch };
