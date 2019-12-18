import { OrderModel } from "../model/order";
import {RepositoryBase} from "../../domain/repository.base";
import {injectable} from "inversify";

@injectable()
export class OrderRepository extends RepositoryBase<any> {
    readonly _model = OrderModel;
}
