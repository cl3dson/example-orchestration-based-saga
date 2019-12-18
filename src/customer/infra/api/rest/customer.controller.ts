
import {BaseHttpController, controller, httpGet, request} from "inversify-express-utils";

@controller("/customer")
export class CustomerController extends BaseHttpController {

    @httpGet("/")
    public async get() {
        return "get get"
    }

}
