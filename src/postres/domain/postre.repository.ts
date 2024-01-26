import { PostreEntity } from "./postre.entity";

export interface PostreRepository {
  findByIdPostre(uuid: string): Promise<PostreEntity | null>;
  deletePostre(uudi: string): Promise<PostreEntity | null>;
}
