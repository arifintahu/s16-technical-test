import * as express from 'express';
import { Application } from 'express';
import routes from './routes';

export function createServer(): Application {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(`/api`, routes);

    return app;
}
