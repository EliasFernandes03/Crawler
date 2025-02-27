import { container } from "tsyringe";
import { ICurrencyRepository } from "../interfaces/RepositoryInterfaces/ICurrencyRepository";
import { CurrencyRepository } from "../repositories/CurrencyRepository";

container.registerSingleton<ICurrencyRepository>(
  "CurrencyRepository",
  CurrencyRepository
);
