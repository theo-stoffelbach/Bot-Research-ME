import { OpenAI } from "openai";
import { config } from './config/config.js';

const ChatGPT_API = config.ChatGPT_API;

const openai = new OpenAI({
    apiKey: `${ChatGPT_API}`, // pas de VPN
});


const pageForEachSubject = async (page, profil = 0) => {
    const subjects = config.accounts[profil].loisirs.split(";");
    return Math.ceil(page / subjects.length);
}
/**
 * Open AI function is used to ask at ChatGPT 90 research for your account do this
 * return array to content 90 research
 */
const openAIFunc = async (pageToSearch = 0) => {
    await console.log(pageToSearch);
    await console.log("Start GPT generation");

    const pageEachSubject = await pageForEachSubject(pageToSearch,0);
    const subjects = config.accounts[0].loisirs.split(";");

    // maxPageResearch

    console.log("Token use : ",Math.ceil(200 * pageToSearch));
    const maxTokensGPT = Math.ceil(200 * pageToSearch);
    const research = `sous forme de listes sans le nom des theme mais que les recherches : donne ${pageEachSubject} sujets de recherche sur chaque theme que je te donne "${subjects.join(",")}" `;
    console.log(research);
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": research}],
        max_tokens: maxTokensGPT,
    });

    let rstArray = completion.choices[0].message.content.split("\n");

    let rst = rstArray.map(el => el.replace(/^[^.]*\.\s/, ''));
    await console.log("The research is finished");

    return rst;
};

export { openAIFunc };
