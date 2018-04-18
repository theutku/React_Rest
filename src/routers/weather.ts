import * as express from 'express';
import BaseRouter from '../lib/routerBase';
import * as bodyParser from 'body-parser';
import IWeatherParams from '../lib/weather';
import * as http from 'http';
import config from '../config';


class WeatherRouter implements BaseRouter {

    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    getWeather(params: IWeatherParams) {
        return new Promise((resolve, reject) => {
            http.get(`http://api.openweathermap.org/data/2.5/weather?q=${params.city},${params.country}&appid=${config.weatherapikey}`, (res) => {
                if (res.statusCode != 200)
                    reject(res);
                else {
                    var body = '';

                    res.on('data', (chunk) => {
                        body += chunk;
                    });

                    res.on('end', () => {
                        var finalData = JSON.parse(body);
                        resolve(finalData);
                    });
                }
            });
        });

    }

    getWeatherRoute(req: express.Request, res: express.Response, next: express.NextFunction) {
        var params = req.body;
        if (req.body == null || req.body == undefined)
            return res.status(401).send('City and country cannot be empty');
        this.getWeather(params).then((result) => {
            res.send(result);
        }).catch((err: http.IncomingMessage) => {
            res.status(err.statusCode).send(err.statusMessage);
        });
    }

    initRoutes() {
        this.router.post('/getweather', this.getWeatherRoute.bind(this));
    }

}

const weatherRouter = new WeatherRouter();

export default weatherRouter.router;