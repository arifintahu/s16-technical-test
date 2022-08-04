import * as express from 'express';
import { Application } from 'express';
import routes from './routes';

export function createServer(): Application {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    // app.use(cors(corsOption));
    // app.use(compression());
    // app.use(morganMiddleware);
    app.use(`/api`, routes);

    return app;
}
