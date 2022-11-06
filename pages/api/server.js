/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: generatePrompt(req.body.prompt),
        temperature: 0.6,
        max_tokens: 100,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(prompt) {
    return `${prompt}`;
}
