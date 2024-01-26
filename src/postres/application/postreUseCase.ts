import { PostreRepository } from "../domain/postre.repository";
import { findByIdUseCase } from "./findbyidpostreUseCase";
import { deletePostresUseCase } from "./deletepostreUseCase";

export class PostreUseCase {
  public deletePostres: deletePostresUseCase;
  public findByidPostres: findByIdUseCase;

  constructor(private readonly postreRepository: PostreRepository) {
    this.deletePostres = new deletePostresUseCase(postreRepository);
    this.findByidPostres = new findByIdUseCase(postreRepository);
  }
}
