import Anthropic from "@anthropic-ai/sdk";
import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients...
`;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

export default async function handler(req, res) {
  try {
    const { ingredients, provider } = req.body;

    if (!ingredients || !Array.isArray(ingredients)) {
      return res.status(400).json({ error: "Invalid ingredients" });
    }

    if (provider === "claude") {
      const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
          { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe!` },
        ],
      });
      return res.status(200).json({ recipe: msg.content[0].text });
    }

    if (provider === "mistral") {
      const response = await hf.chatCompletion({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe!` },
        ],
        max_tokens: 1024,
      });
      return res.status(200).json({ recipe: response.choices[0].message.content });
    }

    res.status(400).json({ error: "Invalid provider" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
