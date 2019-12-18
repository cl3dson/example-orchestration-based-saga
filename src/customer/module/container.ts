import {Container} from "inversify";
import {CustomerRepository} from "./repositories/customer.repository";
import {CustomerService} from "./services/customer.service";
import {MessageBroker} from "../connections/message.broker";
import {Mongodb} from "../connections/mongodb";
import {CreditReserve} from "./handlers/credit.reserve"

const APPContainer = new Container();
APPContainer.bind("CustomerRepository").to(CustomerRepository);
APPContainer.bind("CustomerService").to(CustomerService);
APPContainer.bind("MessageBroker").to(MessageBroker);
APPContainer.bind("Mongodb").to(Mongodb);
APPContainer.bind("CreditReserve").to(CreditReserve);

export {APPContainer}
