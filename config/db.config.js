import config from './env.config.js'


const dbConfigString = `${config.DB_DIALECT}://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_DATABASE}`
export default dbConfigString