import "dotenv/config"

import OpenAI from "openai";
const openai = new OpenAI()
const results = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {role: "system", content: "You are an AI assistant, answer any questions to the best of your ability.", 
        },
        {
            role: "user",
            content: "Hi I'm actually learning to use your API how do you think I'm doing ?",
        }
    ]
})

console.log(results.choices[0].message.content);