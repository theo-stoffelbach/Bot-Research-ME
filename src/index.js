import { initPuppeteer } from "./puppeteer/initPuppeteer.js";
import { openAIFunc } from "./openAI.js";
import { startResearch } from "./puppeteer/startResearch.js";
import { manageAccount } from "./puppeteer/managaAccount.js";
import { pageMaxResearch } from "./puppeteer/pageMaxResearch.js";

async function main() {
    // const [allSearch, page] = await Promise.all([openAIFunc(), initPuppeteer()]);
    const  page = await initPuppeteer();
    await manageAccount(page);

    await pageMaxResearch(page);


    // await startResearch(page, allSearch);
}

main().then(() => console.log("End Program"));
