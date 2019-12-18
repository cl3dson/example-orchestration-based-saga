import "reflect-metadata";
import * as cors from "cors";
import "./api/rest/customer.controller"
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import {APPContainer} from "./container";
import {MessageBroker} from "../connections/message.broker";
import {Mongodb} from "../connections/mongodb";
require("dotenv").config({path:process.cwd()+"/src/order/.env"});

export class App {

    private server;

    constructor() {
        const server = new InversifyExpressServer(APPContainer);
        server.setConfig(app => {
            App.config(app);
        });
        this.server = server;
    }

    private static config(app): void {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cors());
    }

    public async start() {

        await new MessageBroker().connect();
        await new Mongodb().connect();

        this.server.build().listen(process.env.PORT, () => {
            console.log(`Running in port ${process.env.PORT}`);
        });
    }
}

new App().start();
