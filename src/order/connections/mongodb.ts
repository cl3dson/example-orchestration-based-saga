import {Connection} from "../domain/interfaces/connection";
import * as mongoose from "mongoose";

export class Mongodb implements Connection {
    public  async connect() {
        return await mongoose.connect(process.env.HOST_MONGODB, {
            dbName: "order",
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    }
}
