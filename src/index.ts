import { Server } from 'net';
import { Application } from 'express';
import AppConfig from './config/app_config';
import { createServer } from './server';
import Logger from './utils/logger';

export function startServer(): Server {
    const app: Application = createServer();

    return app.listen(AppConfig.application.port, async () => {
        Logger.debug(
            `Server is listening on port ${AppConfig.application.port}`
        );
    });
}

startServer();
