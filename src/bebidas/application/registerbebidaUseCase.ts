import { BebidaRepository } from "../domain/bebida.repository";
import { BebidaValue } from "../domain/bebida.value";
import { EncryptionService } from "./services/cifradoregister";
export class RegisterBebidaUseCase {
  constructor(
    private readonly bebidaRepository: BebidaRepository,
    private readonly encryptationService: EncryptionService
  ) {}

  public async execute({
    name,
    price,
    amount,
  }: {
    name: string;
    price: number;
    amount: number;
  }) {
    name = this.encryptationService.EncryptPassword(name);
    const bebidaValue = new BebidaValue({ name, price, amount });
    const bebidaCreated = await this.bebidaRepository.registerBebida(
      bebidaValue
    );
    return bebidaCreated;
  }
}
