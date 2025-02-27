// src/routes/CurrencyRoute.ts
import { Router } from "express";
import { CurrencyController } from "../controllers/CurrencyController";
import { CurrencyService } from "../services/CurrencyService";
import { CurrencyRepository } from "../repositories/CurrencyRepository";

const router = Router();

const currencyRepository = new CurrencyRepository();
const currencyService = new CurrencyService(currencyRepository);
const currencyController = new CurrencyController(currencyService);

router.post("/currencies", currencyController.store);

export default router;
