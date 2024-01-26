import { Router } from "express";
import { PostreUseCase } from "../../application/postreUseCase";
import { PostreController } from "../controllers/postre.ctrl";
import { MongoRepository } from "../repositories/mongo.repository";
const postreroute = Router();
const mongoRepository = new MongoRepository();
const postreUseCase = new PostreUseCase(mongoRepository);
const postreCtrl = new PostreController(postreUseCase);

postreroute.delete("/postre", postreCtrl.deleteOneCtrl);
postreroute.get("/postre", postreCtrl.findOneCtrl);

export default postreroute;
