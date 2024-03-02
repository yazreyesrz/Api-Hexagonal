import { PostreRepository } from "../domain/postre.repository";
import { PostreValue } from "../domain/postre.value";
import { Broker } from "../infraestructure/services/rabbitqm";

export class RegisterPostreUseCase {
  constructor(
    private readonly postreRepository: PostreRepository,
    private readonly broker: Broker
  ) {}

  public async execute({
    name,
    price,
    amount,
  }: {
    name: string;
    price: number;
    amount: number;
  }) {
    const postreValue = new PostreValue({ name, price, amount });
    const postreCreated = await this.postreRepository.registerPostre(
      postreValue
    );
    const ID = postreCreated?.uuid || "7777";
    this.broker.sendNotificacion(name, price, amount, ID);
    return postreCreated;
  }
}
