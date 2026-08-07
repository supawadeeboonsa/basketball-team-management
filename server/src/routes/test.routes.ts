import { Router } from "express";

const router = Router();

// GET /api/test
router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API working",
  });
});

export default router;