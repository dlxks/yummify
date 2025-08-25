import Anthropic from "@anthropic-ai/sdk";
import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients...
`;

const isLocal = import.meta.env.DEV;

let anthropic, hf;

if (isLocal) {
  anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);
}

async function callApiRoute(ingredientsArr, provider) {
  const res = await fetch("/api/getRecipe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: ingredientsArr, provider }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = await res.json();
  return data.recipe;
}

export async function getRecipeFromChefClaude(ingredientsArr) {
  if (isLocal) {
    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `I have ${ingredientsArr.join(", ")}. Please give me a recipe!`,
        },
      ],
    });
    return msg.content[0].text;
  }
  return await callApiRoute(ingredientsArr, "claude");
}

export async function getRecipeFromMistral(ingredientsArr) {
  if (isLocal) {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsArr.join(", ")}. Please give me a recipe!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  }
  return await callApiRoute(ingredientsArr, "mistral");
}
