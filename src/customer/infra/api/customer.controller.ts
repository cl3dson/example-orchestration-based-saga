import {BaseHttpController, controller, httpGet} from "inversify-express-utils";

@controller("/customer")
export class CustomerController extends BaseHttpController {
    @httpGet("/")
    public async get() {
        return "get get"
    }

    @httpGet("/")
    public async post() {
        return "post post"
    }
}
