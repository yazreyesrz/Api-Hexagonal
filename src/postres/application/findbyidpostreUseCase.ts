import { PostreRepository } from "../domain/postre.repository";

export class findByIdUseCase {
  constructor(private readonly postreRepository: PostreRepository) {}

  public async execute(uuid: string) {
    const postre = await this.postreRepository.findByIdPostre(uuid);
    return postre;
  }
}
