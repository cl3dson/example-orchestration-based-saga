import {inject, injectable} from "inversify";
import {CustomerRepository} from "../repositories/customer.repository";

@injectable()
export class CustomerService {
    constructor(@inject("CustomerRepository") private customerRepository: CustomerRepository){}

    async get(filter) {
        return await this.customerRepository.find(filter);
    }

    async create(customer) {
        return await this.customerRepository.create(customer);
    }
}
