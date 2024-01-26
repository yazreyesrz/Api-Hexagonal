import { Request, Response } from "express";
import { PostreUseCase } from "../../application/postreUseCase";

export class PostreController {
  constructor(private postreUseCase: PostreUseCase) {
    this.deleteCtrl = this.deleteCtrl.bind(this);
    this.findCtrl = this.findCtrl.bind(this);
  }

  public async findCtrl({ query }: Request, res: Response) {
    const postre = await this.postreUseCase.findByidPostres.execute();
    res.send({ postre });
  }

  public async deleteCtrl({ query }: Request, res: Response) {
    const postre = await this.postreUseCase.deletePostres.execute(query);
    res.send({ postre });
  }
}
