import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRouter from "./routes/chat.js";
import leadsRouter from "./routes/leads.js";
import webhooksRouter from "./routes/webhooks.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/chat", chatRouter);
app.use("/leads", leadsRouter);
app.use("/webhooks", webhooksRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});