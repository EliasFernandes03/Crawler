import { ICurrencyInterface } from "../Objects/ICurrencyInterface";

export interface ICurrencyRepository {
    store(data: ICurrencyInterface): Promise<ICurrencyInterface>;
}
