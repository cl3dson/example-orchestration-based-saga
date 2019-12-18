import { OrderModel } from "../model/order";
import {RepositoryBase} from "../../domain/repository.base";
import {inject, injectable} from "inversify";
import {OrderObservable} from "./order.observable";

@injectable()
export class OrderRepository extends RepositoryBase<any> {
    constructor(@inject("OrderObservable") orderObservable: OrderObservable) {
        super();
        this._model = OrderModel;
        this._observable = orderObservable
    }
}
