const AppConfig = {
    application: {
        name: process.env.APP_NAME,
        server: process.env.SERVER,
        port: parseInt(<string>process.env.PORT, 10) || 3000,
        api: process.env.API || 'api',
        secret: process.env.JWT_SECRET || 'j!89nKO5as&Js'
    },
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        port: parseInt(<string>process.env.DB_PORT, 10) || 5432,
        is_log: process.env.DB_LOG === 'true'
    }
};

export default Object.freeze(AppConfig);
