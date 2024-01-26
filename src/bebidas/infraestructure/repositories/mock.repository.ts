import { BebidaEntity } from "../../domain/bebida.entity";
import { BebidaRepository } from "../../domain/bebida.repository";
import BebidaModel from "../models/bebida.schema";

const Mock_bebida = {
  name: "Cappuccino",
  price: 120,
  amount: 3,
};

const Mock_bebida02 = {
  name: "Frappe",
  price: 80,
  amount: 2,
};
export class MockRepository implements BebidaRepository {
  async findBebidas(): Promise<any | null> {
    const bebida = Mock_bebida;
    return bebida;
  }
  async registerBebida(): Promise<any | null> {
    const bebida = Mock_bebida02;
    return bebida;
  }
}
