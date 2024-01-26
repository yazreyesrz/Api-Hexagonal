import { PostreEntity } from "./postre.entity";
import { v4 as uuid } from "uuid";
export class PostreValue implements PostreEntity {
  name: string;
  price: number;
  amount: number;
  uuid: string;

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
    this.uuid = uuid();
  }
}
