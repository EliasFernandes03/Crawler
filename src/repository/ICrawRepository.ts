import { PrismaClient } from "@prisma/client";
import { ICurrencyInterface } from "../interfaces/ICurrencyInterface";

const prisma = new PrismaClient();

export class CurrencyRepository {
    async store(data: ICurrencyInterface): Promise<ICurrencyInterface> {
        return prisma.currency.create({
            data: {
                code: data.code,
                name: data.name,
                symbol: data.symbol,
                rate: data.rate,
            },
        });
    }
}
