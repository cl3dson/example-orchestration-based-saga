import { OrderModel } from "../model/order";
import {RepositoryBase} from "../../domain/repository.base";
import {inject, injectable} from "inversify";
import {OrderEventsObservable} from "./order.events.observable";

@injectable()
export class OrderRepository extends RepositoryBase<any> {
    constructor(@inject("OrderObservable") orderObservable: OrderEventsObservable) {
        super();
        this._model = OrderModel;
        this._observable = orderObservable
    }
}
