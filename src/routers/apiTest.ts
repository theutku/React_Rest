import * as express from 'express';
import BaseRouter from '../lib/routerBase';

class TestRouter implements BaseRouter {

    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }


    routerTest(): Promise<any> {
        return new Promise((resolve, reject) => {
            var resp = 'Router OK';
            resolve(resp);
        });
    }

    routerTestRoute(req: express.Request, res: express.Response, next: express.NextFunction) {
        this.routerTest().then((result) => {
            res.send(result);
        });
        // res.send('hi');
    }


    initRoutes() {
        this.router.get('/', this.routerTestRoute.bind(this));
    }

}

const apiTestRouter = new TestRouter();

export default apiTestRouter.router;