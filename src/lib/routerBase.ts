import * as express from 'express';

export default interface IRouterBase {
    router: express.Router;
    initRoutes();
}