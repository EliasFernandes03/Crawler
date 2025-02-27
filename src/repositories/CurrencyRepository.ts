import { injectable } from "tsyringe";
import { PrismaClient } from "@prisma/client";
import { ICurrencyRepository } from "../interfaces/RepositoryInterfaces/ICurrencyRepository";
import { ICurrencyInterface } from "../interfaces/Objects/ICurrencyInterface";

@injectable()
export class CurrencyRepository implements ICurrencyRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async store(data: ICurrencyInterface): Promise<ICurrencyInterface> {
        return this.prisma.currency.create({
            data: {
                code: data.code,
                name: data.name,
                symbol: data.symbol,
                rate: data.rate,
            },
        });
    }
}
