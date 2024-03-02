import { PostreEntity } from "../../domain/postre.entity";
import { PostreRepository } from "../../domain/postre.repository";
import postreModel from "../models/postre.schema";
export class MongoRepository implements PostreRepository {
  async findByIdPostre(uuid: string): Promise<any | null> {
    const postre = postreModel.findOne({ uuid });
    return postre;
  }
  async deletePostre(uuid: string): Promise<any | null> {
    const postre = await postreModel.deleteOne({ uuid });
    return postre;
  }

  async deleteByIdPostre(uuid: string): Promise<any | null> {
    const postre = postreModel.deleteOne({ uuid });
    return postre;
  }

  async registerPostre(postreIn: PostreEntity): Promise<any | null> {
    const postre = await postreModel.create(postreIn);
    return postre;
  }
}
