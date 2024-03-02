import { PostreEntity } from "./postre.entity";

export interface PostreRepository {
  findByIdPostre(uuid: string): Promise<PostreEntity | null>;
  deleteByIdPostre(uuid: string): Promise<PostreEntity | null>;
  deletePostre(uudi: string): Promise<PostreEntity | null>;
  deleteByIdPostre(uuid: string): Promise<PostreEntity | null>;
  registerPostre({
    name,
    price,
    amount,
  }: {
    name: string;
    price: number;
    amount: number;
  }): Promise<PostreEntity | null>;
}
