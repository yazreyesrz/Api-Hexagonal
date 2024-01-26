import { BebidaEntity } from "../../domain/bebida.entity";
import { BebidaRepository } from "../../domain/bebida.repository";
import BebidaModel from "../models/bebida.schema";
export class MongoRepository implements BebidaRepository {
  async findBebidas(): Promise<any | null> {
    const bebida = BebidaModel.find();
    return bebida;
  }
  async registerBebida(bebidaIn: BebidaEntity): Promise<any | null> {
    const bebida = await BebidaModel.create(bebidaIn);
    return bebida;
  }
}
