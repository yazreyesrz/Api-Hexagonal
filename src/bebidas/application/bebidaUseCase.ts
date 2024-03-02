import { BebidaRepository } from "../domain/bebida.repository";
import { findDetailBebidasUseCase } from "./findbebidaUseCase";
import { RegisterBebidaUseCase } from "./registerbebidaUseCase";
import { EncryptionService } from "./services/cifradoregister";

export class BebidaUseCase {
  public registerBebidas: RegisterBebidaUseCase;
  public findBebidas: findDetailBebidasUseCase;

  constructor(
    private readonly bebidaRepository: BebidaRepository,
    private readonly encryptationService: EncryptionService
  ) {
    this.registerBebidas = new RegisterBebidaUseCase(
      bebidaRepository,
      encryptationService
    );
    this.findBebidas = new findDetailBebidasUseCase(bebidaRepository);
  }
}
