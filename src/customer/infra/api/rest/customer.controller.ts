import * as express from "express";
import {BaseHttpController, controller, httpGet, request} from "inversify-express-utils";
import {inject} from "inversify";

@controller("/customer")
export class CustomerController extends BaseHttpController {

    @httpGet("/")
    public async get() {
        return "get get"
    }

    @httpGet("/")
    public async post(@request() req: express.Request) {
        return "post post"
    }

}
