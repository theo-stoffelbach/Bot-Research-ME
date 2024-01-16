import {login} from './login.js';
import {logout} from './logout.js';

const manageAccount = async (page) => {
    try {
        await page.waitForSelector("a.id_button");
        await page.click("a.id_button");

        await page.waitForTimeout(3000);
        const isConnected = await page.$('div.id_signout'); // Test if you're connected

        if (isConnected) {
            await logout(page);
        }

        await login(page);
    } catch (err) {
        let time = new Date();
        console.log("error : " + err);
        await page.screenshot({ path: './screenDebug/error - ' + time.getTime().toString() + '.png' });
    }
}

export { manageAccount };
