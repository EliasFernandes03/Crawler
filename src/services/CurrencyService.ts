// src/services/CurrencyService.ts
import { CurrencyRepository } from "../repositories/CurrencyRepository";
import { ICurrencyInterface } from "../interfaces/Objects/ICurrencyInterface";

export class CurrencyService {
  private currencyRepository: CurrencyRepository;

  constructor(currencyRepository: CurrencyRepository) {
    this.currencyRepository = currencyRepository;
  }

  async store(data: ICurrencyInterface) {
    return this.currencyRepository.store(data);
  }
}
