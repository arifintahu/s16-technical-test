import * as express from 'express';
import { Application } from 'express';

export function createServer(): Application {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    // app.use(cors(corsOption));
    // app.use(compression());
    // app.use(morganMiddleware);
    // app.use(`/${API}`, routes);

    return app;
}
