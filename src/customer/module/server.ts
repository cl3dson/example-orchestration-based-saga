import "reflect-metadata";
import * as cors from "cors";
import "./api/rest/customer.controller"
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import {MessageBroker} from "../connections/message.broker";
import {APPContainer} from "./container";
require("dotenv").config({path:process.cwd()+"/src/customer/.env"});

export class App {

    private server;

    constructor() {
        const server = new InversifyExpressServer(APPContainer);
        server.setConfig(app => App.config(app));
        this.server = server;
    }

    private static config(app): void {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cors());
    }

    public async start() {
        this.server.build().listen(process.env.PORT, () => {
            console.log(`Running in port ${process.env.PORT}`);
        });
    }

    public async connects() {
        let init: MessageBroker = APPContainer.get("MessageBroker");
        await init.connect();
    }
}

const APP = new App();
APP.start();
APP.connects();
