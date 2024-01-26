import { Request, Response } from "express";
import { BebidaUseCase } from "../../application/bebidaUseCase";

export class BebidaController {
  constructor(private bebidaUseCase: BebidaUseCase) {
    this.createCtrl = this.createCtrl.bind(this);
    this.findCtrl = this.findCtrl.bind(this);
  }

  public async findCtrl({ query }: Request, res: Response) {
    const bebida = await this.bebidaUseCase.findBebidas.execute();
    res.send({ bebida });
  }

  public async createCtrl({ body }: Request, res: Response) {
    const bebida = await this.bebidaUseCase.registerBebidas.execute(body);
    res.send({ bebida });
  }
}
