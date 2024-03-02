import { Router } from "express";
import { PostreUseCase } from "../../application/postreUseCase";
import { PostreController } from "../controllers/postre.ctrl";
import { MongoRepository } from "../repositories/mongo.repository";
import { Broker } from "../services/rabbitqm";
const postreroute = Router();
const broker = new Broker();
const mongoRepository = new MongoRepository();
const postreUseCase = new PostreUseCase(mongoRepository, broker);
const postreCtrl = new PostreController(postreUseCase);

postreroute.delete("/postre", async (req, res) => {
  await postreCtrl.deleteOneCtrl(req, res);
});

postreroute.get("/postre", async (req, res) => {
  await postreCtrl.findOneCtrl(req, res);
});

postreroute.post("/postre", async (req, res) => {
  await postreCtrl.createCtrl(req, res);
});

postreroute.delete("/postre", async (req, res) => {
  await postreCtrl.deleteByIdCtrl(req, res);
});

export default postreroute;
