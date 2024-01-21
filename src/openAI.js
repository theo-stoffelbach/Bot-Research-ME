import { OpenAI } from "openai";
import { config } from './config/config.js';

const ChatGPT_API = config.ChatGPT_API;

const openai = new OpenAI({
    apiKey: `${ChatGPT_API}`, // pas de VPN
});

/**
 * Open AI function is used to ask at ChatGPT 90 research for your account do this
 * return array to content 90 research
 */

const openAIFunc = async (pageToSearch) => {
    await console.log(pageToSearch);
    await console.log("Start GPT generation");

    // maxPageResearch

    const maxTokensGPT = Math.ceil(((2560 * pageToSearch) / 90) / 10) * 10

    console.log("maxTokensGPT : ", maxTokensGPT)

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": `sous forme de liste : ${pageToSearch} sujets de recherche sur le thème des technologies`}],
        max_tokens: maxTokensGPT,
    });

    let rstArray = completion.choices[0].message.content.split("\n");

    let rst = rstArray.map(el => el.replace(/^[^.]*\.\s/, ''));
    await console.log("The research is finished");

    return rst;
};

export { openAIFunc };
