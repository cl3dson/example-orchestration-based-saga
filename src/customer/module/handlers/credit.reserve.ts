import {Handler, JSONMessage, Message, MessageHandler, MessagePublisher} from "mercury-messenger";
import {inject, injectable} from "inversify";
import {CustomerRepository} from "../repositories/customer.repository";
import {CustomerService} from "../services/customer.service";

@injectable()
@MessageHandler("OrderCreated")
export class CreditReserve implements Handler {

    constructor(@inject("CustomerService") private customerService: CustomerService){}

    @MessagePublisher()
    async handle(msg: Message): Promise<void | Message | Message[]> {
        const customer = await this.customerService.get({ id: "1" });
        console.log("EVENT",customer)
        new JSONMessage('CreditReserved', {})
    }
}
