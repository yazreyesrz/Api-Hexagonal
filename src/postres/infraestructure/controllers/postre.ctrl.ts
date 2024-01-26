import { Request, Response } from "express";
import { PostreUseCase } from "../../application/postreUseCase";

export class PostreController {
  constructor(private postreUseCase: PostreUseCase) {
    this.deleteOneCtrl = this.deleteOneCtrl.bind(this);
    this.findOneCtrl = this.findOneCtrl.bind(this);
  }

  public async findOneCtrl({ query }: Request, res: Response) {
    const { uuid = "" } = query;
    const postre = await this.postreUseCase.findByidPostres.execute(`${uuid}`);
    res.send({ postre });
  }

  public async deleteOneCtrl({ query }: Request, res: Response) {
    const { uuid = "" } = query;
    const postre = await this.postreUseCase.deletePostres.execute(`${uuid}`);
    res.send({ postre });
  }
}
