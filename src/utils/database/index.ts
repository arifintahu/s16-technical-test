import { Sequelize } from 'sequelize';
import AppConfig from 'src/config/app_config';
import Logger from '../logger';

function customLog(msg: string) {
    Logger.debug(msg);
}

export const db: Sequelize = new Sequelize({
    host: AppConfig.database.host,
    database: AppConfig.database.name,
    username: AppConfig.database.user,
    password: AppConfig.database.password,
    port: AppConfig.database.port,
    dialect: 'mysql',
    logging: AppConfig.database.is_log ? customLog : false,
    timezone: 'Asia/Jakarta'
});

export default function syncDB(): Promise<Sequelize> {
    return db.sync();
}
