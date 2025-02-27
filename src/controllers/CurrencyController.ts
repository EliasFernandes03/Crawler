import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { CurrencyService } from "../services/CurrencyService";

@injectable()
export class CurrencyController {
    constructor(
        @inject(CurrencyService) private currencyService: CurrencyService
    ) { }

    store = async (req: Request, res: Response): Promise<void> => {
        try {
            const currency = await this.currencyService.store(req.body);
            res.status(201).json(currency);
        } catch (error) {
            res.send("Something went wrong").status(500)
        }
    };
}
