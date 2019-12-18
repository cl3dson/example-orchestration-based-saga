import * as express from "express";
import {BaseHttpController, controller, httpGet, request} from "inversify-express-utils";
import {inject} from "inversify";
import {CustomerService} from "../../services/customer.service";

@controller("/customer")
export class CustomerController extends BaseHttpController {
    constructor(@inject("CustomerService") private customerRepository: CustomerService) {
        super()
    }

    @httpGet("/")
    public async get(req: express.Request) {
        return await this.customerRepository.get(req.query);
    }
}
