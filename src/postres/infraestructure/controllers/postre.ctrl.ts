import { Request, Response } from "express";
import { PostreUseCase } from "../../application/postreUseCase";

export class PostreController {
  constructor(private postreUseCase: PostreUseCase) {
    this.deleteOneCtrl = this.deleteOneCtrl.bind(this);
    this.findOneCtrl = this.findOneCtrl.bind(this);
    this.createCtrl = this.createCtrl.bind(this);
    this.deleteByIdCtrl = this.deleteByIdCtrl.bind(this);
  }

  public async findOneCtrl(req: Request, res: Response) {
    const uuid: string = (req.query.uuid as string) || "";

    const postre = await this.postreUseCase.findByidPostres.execute(uuid);
    res.send({ postre });
  }

  public async deleteOneCtrl(req: Request, res: Response) {
    const uuid: string = (req.query.uuid as string) || "";

    const postre = await this.postreUseCase.deletePostres.execute(uuid);
    res.send({ postre });
  }
  public async createCtrl({ body }: Request, res: Response) {
    const postre = await this.postreUseCase.registerPostres.execute(body);
    res.send({ postre });
  }

  public async deleteByIdCtrl(req: Request, res: Response) {
    const uuid: string = (req.query.uuid as string) || "";

    const postre = await this.postreUseCase.deleteByidPostres.execute(uuid);
    res.send({ postre });
  }
}
