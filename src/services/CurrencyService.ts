import { injectable, inject } from "tsyringe";
import { ICurrencyRepository } from "../interfaces/RepositoryInterfaces/ICurrencyRepository";
import { ICurrencyInterface } from "../interfaces/Objects/ICurrencyInterface";

@injectable()
export class CurrencyService {
    constructor(
        @inject("CurrencyRepository") private currencyRepository: ICurrencyRepository
    ) {}

    async store(data: ICurrencyInterface): Promise<ICurrencyInterface> {
        return this.currencyRepository.store(data);
    }
}
