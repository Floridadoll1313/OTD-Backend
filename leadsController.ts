import { Request, Response } from "express";
import { saveLead } from "../services/supabaseService.js";

export async function handleLead(req: Request, res: Response) {
  try {
    const { email, source, metadata } = req.body;

    if (!email) {
      return res.status(400).json({ error: "email is required" });
    }

    const data = await saveLead({ email, source, metadata });

    res.status(201).json({ success: true, data });
  } catch (err) {
    console.error("Lead error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}