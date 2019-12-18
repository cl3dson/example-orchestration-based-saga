import {Container} from "inversify";
import {OrderService} from "./services/order.service";
import {OrderRepository} from "./repositories/order.repository";
import {MessageBroker} from "../connections/message.broker";
import {OrderObservable} from "./repositories/order.observable";

const APPContainer = new Container();
APPContainer.bind("OrderService").to(OrderService);
APPContainer.bind("OrderRepository").to(OrderRepository);
APPContainer.bind("MessageBroker").to(MessageBroker);
APPContainer.bind("OrderObservable").to(OrderObservable);
export { APPContainer };
