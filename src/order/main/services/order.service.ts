import {inject, injectable} from "inversify";
import {OrderRepository} from "../repositories/order.repository";

@injectable()
export class OrderService {

    constructor (@inject("OrderRepository") private orderRepository: OrderRepository) {}

    public async create() {
        return 'created'
    }

    public async get() {
        return 'get'
    }
}
