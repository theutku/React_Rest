import * as express from 'express';
import BaseRouter from '../lib/routerBase';

class HomeRouter implements BaseRouter {

    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }


    getHome() {

    }

    getHomeRoute(req: express.Request, res: express.Response, next: express.NextFunction) {

    }

    initRoutes() {
        this.router.get('/', this.getHomeRoute.bind(this));
    }

}

const homeRouter = new HomeRouter();

export default homeRouter.router;