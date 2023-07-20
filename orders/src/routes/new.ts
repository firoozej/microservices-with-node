import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@firoozej/ticketingshared";


const router = express.Router();

router.post(
  "/api/orders",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
  }
);

export { router as createOrderRouter };
