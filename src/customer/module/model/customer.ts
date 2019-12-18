import {Customer} from "../../domain/entities/customer";
import {Model, Document, Schema, model} from 'mongoose';

const CustomerSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        credit : { type: Number, default: 0 },
    },
    {
        timestamps: true
    }
);

export interface ICustomerModel extends Customer, Document {}
export const CustomerModel : Model<ICustomerModel> = model<ICustomerModel>("customer", CustomerSchema);
