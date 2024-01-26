import { BebidaRepository } from "../domain/bebida.repository";
import { BebidaValue } from "../domain/bebida.value";

export class RegisterBebidaUseCase {
  constructor(private readonly bebidaRepository: BebidaRepository) {}

  public async execute({
    name,
    price,
    amount,
  }: {
    name: string;
    price: number;
    amount: number;
  }) {
    const bebidaValue = new BebidaValue({ name, price, amount });
    const bebidaCreated = await this.bebidaRepository.registerBebida(
      bebidaValue
    );
    return bebidaCreated;
  }
}
