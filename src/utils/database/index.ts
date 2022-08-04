import { Sequelize } from 'sequelize';
import AppConfig from '../../config/app_config';
import Logger from '../logger';

function customLog(msg: string) {
    Logger.debug(msg);
}

export const db: Sequelize = new Sequelize(
    <string>AppConfig.database.name,
    <string>AppConfig.database.user,
    AppConfig.database.password,
    {
        host: AppConfig.database.host,
        dialect: 'postgres',
        logging: AppConfig.database.is_log ? customLog : false
    }
);

export async function syncDB(): Promise<Sequelize> {
    return db.sync();
}
