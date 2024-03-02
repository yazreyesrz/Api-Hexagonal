import { PostreRepository } from "../domain/postre.repository";
import { findByIdUseCase } from "./findbyidpostreUseCase";
import { deletePostresUseCase } from "./deletepostreUseCase";
import { RegisterPostreUseCase } from "./registerPostreUseCase";
import { deleteByIdPostreUseCase } from "./deletebyidpostreUseCase";
import { Broker } from "../infraestructure/services/rabbitqm";

export class PostreUseCase {
  public deletePostres: deletePostresUseCase;
  public findByidPostres: findByIdUseCase;
  public registerPostres: RegisterPostreUseCase;
  public deleteByidPostres: deleteByIdPostreUseCase;

  constructor(
    private readonly postreRepository: PostreRepository,
    private readonly broker: Broker
  ) {
    this.deletePostres = new deletePostresUseCase(postreRepository);
    this.findByidPostres = new findByIdUseCase(postreRepository);
    this.registerPostres = new RegisterPostreUseCase(postreRepository, broker);
    this.deleteByidPostres = new deleteByIdPostreUseCase(postreRepository);
  }
}
