import {Connection} from "../domain/interfaces/connection";
import {BrokerType, Mercury} from "mercury-messenger/dist/Mercury";
import {inject, injectable} from "inversify";
import {CreditReserve} from "../module/handlers/credit.reserve";

@injectable()
export class MessageBroker implements Connection {

    constructor(@inject("CreditReserve") private creditReserve: CreditReserve) {}

    public connect() {
        let messageBroker = new Mercury(
            BrokerType.RABBITMQ,
            process.env.HOST_RABBIT,
            process.env.USER_RABBIT,
            process.env.PASSWORD_RABBIT,
            process.env.APP_NAME,
            process.env.SERVICE_NAME
        );
        messageBroker.useHandler(this.creditReserve);
        messageBroker.init().then(res => console.log("Connect RabbitMQ"))
    }
}
