import express, { Request, Response } from "express";
import { validateRequest, requireAuth } from "@firoozej/ticketingshared";

const router = express.Router();

router.delete(
  "/api/orders/:id",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {}
);

export { router as deleteOrderRouter };
