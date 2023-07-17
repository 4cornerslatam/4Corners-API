import express, { Request, Response, NextFunction } from "express";
import { createUser } from "../services/user.service";

const router = express.Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    const user = await createUser(body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
