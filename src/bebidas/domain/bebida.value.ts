import { BebidaEntity } from "./bebida.entity";
export class BebidaValue implements BebidaEntity {
  name: string;
  price: number;
  amount: number;

  constructor({
    name,
    price,
    amount,
  }: {
    name: string;
    price: number;
    amount: number;
  }) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}
