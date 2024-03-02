import { Router } from "express";
import { MongoRepository } from "../repositories/mongo.repository";
import { BebidaUseCase } from "../../application/bebidaUseCase";
import { BebidaController } from "../controllers/bebida.ctrl";
import { MockRepository } from "../repositories/mock.repository";
import { EncryptionService } from "../../application/services/cifradoregister";

const encryptService = new EncryptionService();
const bebidaroute = Router();
const mockrepo = new MockRepository();
const mongoRepository = new MongoRepository();
const bebidaUseCase = new BebidaUseCase(mongoRepository, encryptService);
const bebidaCtrl = new BebidaController(bebidaUseCase);

bebidaroute.post("/bebida", async (req, res) => {
  await bebidaCtrl.createCtrl(req, res);
});

bebidaroute.get("/bebida", async (req, res) => {
  await bebidaCtrl.findCtrl(req, res);
});
export default bebidaroute;
