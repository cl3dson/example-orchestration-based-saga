import {Connection} from "../domain/interfaces/connection";
import {BrokerType, Mercury} from "mercury-messenger/dist/Mercury";
import {injectable} from "inversify";

@injectable()
export class MessageBroker implements Connection {
    public async connect() {
        let messageBroker = new Mercury(
            BrokerType.RABBITMQ,
            process.env.HOST_RABBIT,
            process.env.USER_RABBIT,
            process.env.PASSWORD_RABBIT,
            process.env.APP_NAME,
            process.env.SERVICE_NAME
        );
        await messageBroker.init()
    }
}
