import { PostreUseCase } from "../../application/postreUseCase";
import { PostreController } from "../controllers/postre.ctrl";
import { MockRepository } from "../repositories/mock.repository";
const postreroute = Router();
const mockrepo = new MockRepository();
const mongoRepository = new MongoRepository();
const postreUseCase = new PostreUseCase(mongoRepository);
const postreCtrl = new PostreController(postreUseCase);

postreroute.post("/postre", postreCtrl.deleteCtrl);
postreroute.get("/postre", postreCtrl.findCtrl);

export default postreroute;
