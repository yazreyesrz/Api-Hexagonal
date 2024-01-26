import { BebidaRepository } from "../domain/bebida.repository";

export class findDetailBebidasUseCase {
  constructor(private readonly bebidaRepository: BebidaRepository) {}

  public async execute() {
    const bebidas = await this.bebidaRepository.findBebidas();
    return bebidas;
  }
}
