// src/controllers/CurrencyController.ts
import { Request, Response } from "express";
import { CurrencyService } from "../services/CurrencyService";

export class CurrencyController {
  private currencyService: CurrencyService;

  constructor(currencyService: CurrencyService) {
    this.currencyService = currencyService;
  }

  // Usando arrow function para manter `this` correto sem bind
  store = async (req: Request, res: Response): Promise<void> => {
    try {
      const currency = await this.currencyService.store(req.body);
      res.status(201).json(currency);
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  };
}
