import express from "express";
import { handleLead } from "../controllers/leadsController.js";

const router = express.Router();

router.post("/", handleLead);

export default router;