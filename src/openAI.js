const { OpenAI } = require("openai");
config = require('./config/config');

const ChatGPT_API = config.ChatGPT_API;

const openai = new OpenAI({
    apiKey: `${ChatGPT_API}`, // pas de VPN
});

async function main() {
    await console.log("Start GPT generation")

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:[{"role":"user","content":"sous forme de liste : 90 sujets de recherche sur le thème des technologies"}],
        max_tokens: 2560,
        // temperature: 0,
        // top_p: 1.0,
        // frequency_penalty: 0.0,
        // presence_penalty: 0.0,
        // stop: ["\n"],
    });

    // await console.log(completion);
    // await console.log("---\n-O-\n---");
    // await console.log(completion.choices[0]);
    // await console.log("---\n-O-\n---");
    // await console.log(completion.choices[0].message.content);

    let rstArray = completion.choices[0].message.content.split("\n");

    let rst = rstArray.map(el => el.replace(/^[^.]*\.\s/, ''));

    await console.log(completion.choices[0].message.content)
    await console.log(rst);
}

main();