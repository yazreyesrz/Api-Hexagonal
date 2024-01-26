import { PostreEntity } from "./postre.entity";

export interface PostreRepository {
  findByIdPostre(): Promise<PostreEntity | null>;
  deletePostre({
    name,
    price,
    amount,
  }: {
    name: string;
    price: number;
    amount: number;
  }): Promise<PostreEntity | null>;
}
