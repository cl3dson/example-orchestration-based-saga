import {Container} from "inversify";
import {OrderService} from "./services/order.service";

const APPContainer = new Container();
APPContainer.bind("OrderService").to(OrderService);
export { APPContainer };
