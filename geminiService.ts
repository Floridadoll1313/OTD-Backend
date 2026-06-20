import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateChatResponse(message: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: message }] }],
  });

  const text =
    response?.candidates?.[0]?.content?.parts?.[0]?.text ??
    "No response from AI.";

  return text;
}