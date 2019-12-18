import {BaseHttpController, controller, httpGet, httpPost} from "inversify-express-utils";
import {inject} from "inversify";
import {OrderService} from "../../services/order.service";

@controller("/order")
export class CustomerController extends BaseHttpController {

    constructor (@inject("OrderService") private orderService: OrderService) {
        super()
    }

    @httpGet("/")
    public async get() {
        return await this.orderService.get();
    }

    @httpPost("/")
    public async create() {
        return await this.orderService.create();
    }
}
