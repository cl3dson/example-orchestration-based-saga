import {injectable} from "inversify";
import {RepositoryBase} from "../../../order/domain/repository.base";
import {CustomerModel} from "../model/customer";

@injectable()
export class CustomerRepository extends RepositoryBase<any> {
    constructor() {
        super();
        this._model = CustomerModel
    }
}

