import "reflect-metadata";
import * as cors from "cors";
import "./api/customer.controller"
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import {Container} from "inversify";

export class App {

    private server;

    constructor() {
        const myContainer = new Container();
        const server = new InversifyExpressServer(myContainer);

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
