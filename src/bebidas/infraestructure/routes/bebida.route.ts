import { Router } from "express";
import { MongoRepository } from "../repositories/mongo.repository";
import { BebidaUseCase } from "../../application/bebidaUseCase";
import { BebidaController } from "../controllers/bebida.ctrl";
import { MockRepository } from "../repositories/mock.repository";
const bebidaroute = Router();
const mockrepo = new MockRepository();
const mongoRepository = new MongoRepository();
const bebidaUseCase = new BebidaUseCase(mongoRepository);
const bebidaCtrl = new BebidaController(bebidaUseCase);

bebidaroute.post("/bebida", bebidaCtrl.createCtrl);
bebidaroute.get("/bebida", bebidaCtrl.findCtrl);

export default bebidaroute;
