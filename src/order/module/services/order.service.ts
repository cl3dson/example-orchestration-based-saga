import {inject, injectable} from "inversify";
import {OrderRepository} from "../repositories/order.repository";

@injectable()
export class OrderService {

    constructor (@inject("OrderRepository") private orderRepository: OrderRepository) {}

    public async create() {
        return this.orderRepository.create({
            user_id: "1222",
            description: "aaaa",
            value: 200,
        })
    }

    public async get() {
        return this.orderRepository.find({});
    }
}
