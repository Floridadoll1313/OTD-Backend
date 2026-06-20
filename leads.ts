import { Router } from "express";
import { handleLead } from "../controllers/leadsController.js";

const router = Router();

router.post("/", handleLead);

export default router;