import { Router } from "express";
import { container } from "tsyringe";
import { CurrencyController } from "../controllers/CurrencyController";

const router = Router();
const currencyController = container.resolve(CurrencyController);

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.post("/currencies", currencyController.store);

export default router;
