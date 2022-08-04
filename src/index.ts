import { Server } from 'net';
import { Application } from 'express';
import AppConfig from './config/app_config';
import { createServer } from './server';
import Logger from './utils/logger';
import { syncDB } from './utils/database';
import { seedUser } from './seed';

export function startServer(): Server {
    const app: Application = createServer();

    return app.listen(AppConfig.application.port, async () => {
        await syncDB();

        if (process.env.SEED === 'true') {
            await seedUser();
        }

        Logger.debug(
            `Server is listening on port ${AppConfig.application.port}`
        );
    });
}

startServer();
