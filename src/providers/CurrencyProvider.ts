import "reflect-metadata";
import { container } from "tsyringe";
import { CurrencyRepository } from "../repositories/CurrencyRepository";
import { ICurrencyRepository } from "../interfaces/RepositoryInterfaces/ICurrencyRepository";

container.registerSingleton<ICurrencyRepository>(
    "CurrencyRepository",
    CurrencyRepository
);
