import express from "express";

const router = express.Router();

router.post("/stripe", (req, res) => {
  // TODO: verify Stripe signature, handle events
  res.json({ received: true });
});

router.post("/calendly", (req, res) => {
  // TODO: handle Calendly webhook payload
  res.json({ received: true });
});

export default router;