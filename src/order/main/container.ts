import {Container} from "inversify";
import {OrderService} from "./services/order.service";
import {OrderRepository} from "./repositories/order.repository";
import {MessageBroker} from "../connections/message.broker";

const APPContainer = new Container();
APPContainer.bind("OrderService").to(OrderService);
APPContainer.bind("OrderRepository").to(OrderRepository);
APPContainer.bind("MessageBroker").to(MessageBroker);
export { APPContainer };
