import "reflect-metadata";
import * as cors from "cors";
import "./api/rest/customer.controller"
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import {APPContainer} from "./container";

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
        this.server.build().listen(8080, () => {
            console.log(`Running in port 8080`);
        });
    }
}

new App().start();
