import { Request, Response } from "express";
import { generateChatResponse } from "../services/geminiService.js";

export async function handleChat(req: Request, res: Response) {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    const text = await generateChatResponse(message);

    res.json({ text });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}