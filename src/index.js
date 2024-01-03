import { initPuppeteer } from "./puppeteer/initPuppeteer.js";
import { openAIFunc } from "./openAI.js";
import { startResearch } from "./puppeteer/startResearch.js"; // Ajout de l'extension .js

async function main() {
    // const [rst, _] = await Promise.all([openAIFunc(), initPuppeteer()]); // Changement ici
    //
    // console.log(rst);

    const page = await initPuppeteer();
    await startResearch(page,"erdqs")

}

main();
