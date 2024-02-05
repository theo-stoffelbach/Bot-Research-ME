import { initPuppeteer } from "./puppeteer/initPuppeteer.js";
import { openAIFunc } from "./openAI.js";
import { startResearch } from "./puppeteer/startResearch.js";
import { manageAccount } from "./puppeteer/managaAccount.js";
import { pageMaxResearch } from "./puppeteer/pageMaxResearch.js";

async function main() {
    // const [allSearch, page] = await Promise.all([ initPuppeteer()]);
    const  page = await initPuppeteer();
    await manageAccount(page);

    const maxPageResearch = await pageMaxResearch(page);
    // const allResearch = await openAIFunc(maxPageResearch);
    //
    // console.log("research : ",allResearch)
    // await startResearch(page, allResearch);
}

main().then(() => console.log("End Program"));
