// src/repositories/CurrencyRepository.ts
import { PrismaClient } from "@prisma/client";
import { ICurrencyInterface } from "../interfaces/Objects/ICurrencyInterface";

const prisma = new PrismaClient();

export class CurrencyRepository {
  async store(data: ICurrencyInterface) {
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
