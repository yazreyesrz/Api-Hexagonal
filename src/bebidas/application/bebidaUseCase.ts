import { BebidaRepository } from "../domain/bebida.repository";
import { findDetailBebidasUseCase } from "./findbebidaUseCase";
import { RegisterBebidaUseCase } from "./registerbebidaUseCase";
export class BebidaUseCase {
  public registerBebidas: RegisterBebidaUseCase;
  public findBebidas: findDetailBebidasUseCase;

  constructor(private readonly bebidaRepository: BebidaRepository) {
    this.registerBebidas = new RegisterBebidaUseCase(bebidaRepository);
    this.findBebidas = new findDetailBebidasUseCase(bebidaRepository);
  }
}
