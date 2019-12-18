import {Handler, JSONMessage, Message, MessageHandler, MessagePublisher} from "mercury-messenger";
import {injectable} from "inversify";

@injectable()
@MessageHandler("OrderCreated")
export class CreditReserve implements Handler {
    @MessagePublisher()
    async handle(msg: Message): Promise<void | Message | Message[]> {
        new JSONMessage('CreditReserved', {})
    }
}
