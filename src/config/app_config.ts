const AppConfig = {
    application: {
        name: process.env.APP_NAME,
        port: parseInt(<string>process.env.PORT, 10) || 3000,
        api: process.env.API || 'api',
        secret: process.env.JWT_SECRET || 'j!89nKO5as&Js'
    },
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
};

export default Object.freeze(AppConfig);
