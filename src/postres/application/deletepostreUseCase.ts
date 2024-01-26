import { PostreRepository } from "../domain/postre.repository";

export class deletePostresUseCase {
  constructor(private readonly PostreRepository: PostreRepository) {}

  public async execute(uuid: string) {
    const postre = await this.PostreRepository.deletePostre(uuid);
    return postre;
  }
}
