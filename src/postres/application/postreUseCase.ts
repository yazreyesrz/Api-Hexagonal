import { PostreRepository } from "../domain/postre.repository";
import { findByIdPostresUseCase } from "./findbyidpostreUseCase";
import { DeletePostreUseCase } from "./deletepostreUseCase";
export class PostreUseCase {
  public deletePostres: DeletePostreUseCase;
  public findByidPostres: findByIdPostresUseCase;

  constructor(private readonly postreRepository: PostreRepository) {
    this.deletePostres = new DeletePostreUseCase(postreRepository);
    this.findByidPostres = new findByIdPostresUseCase(postreRepository);
  }
}
