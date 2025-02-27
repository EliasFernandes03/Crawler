import { Decimal } from "@prisma/client/runtime/library";

export interface ICurrencyInterface {
    id?: number;
    code: string;
    name: string;
    symbol: string;
    rate: Decimal;
    createdAt?: Date;
    updatedAt?: Date;
}
