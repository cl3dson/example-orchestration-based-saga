import {Container} from "inversify";
import {OrderService} from "./services/order.service";
import {OrderRepository} from "./repositories/order.repository";

const APPContainer = new Container();
APPContainer.bind("OrderService").to(OrderService);
APPContainer.bind("OrderRepository").to(OrderRepository);
export { APPContainer };
