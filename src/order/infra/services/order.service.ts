import {injectable} from "inversify";

@injectable()
export class OrderService {

    public async create() {
        return 'created'
    }

    public async get() {
        return 'get'
    }
}
