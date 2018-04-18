import * as express from 'express';
import * as http from 'http';
import * as bp from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as path from 'path';
import * as mysql from 'mysql';
import config from './config';
import apiDb from './db/index';
import BaseRouter from './lib/routerBase';
import testRouter from './routers/apiTest';
import weatherRouter from './routers/weather';

class ReactApp {
    app: express.Application;
    appRouter: express.Router;

    constructor() {
        this.app = express();
        this.appRouter = express.Router();
    }

    init() {
        return new Promise((resolve, reject) => {
            return apiDb().connect().then(() => {

                this.app.use(cors());

                this.app.use(morgan('dev'));

                this.app.use(bp.json());
                this.app.use(bp.urlencoded({ extended: false }));

                var staticPublicPath = path.join(__dirname, '../public');
                this.app.use('/', express.static(staticPublicPath));

                this.app.use('/', this.appRouter);
                this.app.use('/api/v1/test', testRouter);
                this.app.use('/weather', weatherRouter);

                const server = http.createServer(this.app);
                server.listen(config.port, (err) => {
                    if (err) {
                        process.exit(2);
                    } else {
                        console.log('Started listening at port: ' + config.port);
                        resolve();
                    }
                });
            }).catch((err) => {
                console.log(`Unable to connect to database: ${err}`);
                process.exit(1);
            })
        });
    }
}

export var App: ReactApp;

export default () => (App = new ReactApp());