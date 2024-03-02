import { PostreRepository } from "../domain/postre.repository";

export class deleteByIdPostreUseCase {
  constructor(private readonly postreRepository: PostreRepository) {}

  public async execute(uuid: string) {
    const postre = await this.postreRepository.deleteByIdPostre(uuid);
    return postre;
  }
}
