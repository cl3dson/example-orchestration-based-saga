import {Order} from "../../domain/entities/order";
import {Model, Document, Schema, model} from 'mongoose';

const CustomerSchema = new Schema(
    {
        user_id: { type: String, required: true },
        description: { type: String, required: true },
        status : { type: String, default: "processing" },
        value: { type: Number, required: true },
    },
    {
        timestamps: true
    }
);

export interface IOrderModel extends Order, Document {}
export const OrderModel : Model<IOrderModel> = model<IOrderModel>("order", CustomerSchema);
