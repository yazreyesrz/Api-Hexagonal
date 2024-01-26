import { BebidaEntity } from "./bebida.entity";

export interface BebidaRepository {
  findBebidas(): Promise<BebidaEntity | null>;
  registerBebida({
    name,
    price,
    amount,
  }: {
    name: string;
    price: number;
    amount: number;
  }): Promise<BebidaEntity | null>;
}
