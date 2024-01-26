import { PostreEntity } from "../../domain/postre.entity";
import { PostreRepository } from "../../domain/postre.repository";
import postreModel from "../models/postre.schema";
export class MongoRepository implements PostreRepository {
  async findByIdPostre(uuid: string): Promise<any | null> {
    const bebida = postreModel.findOne({ uuid });
    return bebida;
  }
  async deletePostre(uuid: string): Promise<any | null> {
    const postre = await postreModel.deleteOne({ uuid });
    return postre;
  }
}
