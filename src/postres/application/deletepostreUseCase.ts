import { PostreRepository } from "../domain/postre.repository";

export class deletePostresUseCase {
  constructor(private readonly postreRepository: PostreRepository) {}

  public async execute(uuid: string) {
    const postre = await this.postreRepository.deletePostre(uuid);
    return postre;
  }
}
