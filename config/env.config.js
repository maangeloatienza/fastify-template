import dotenv from 'dotenv';

dotenv.config()

const config = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_DATABASE: process.env.DB_DATABASE || 'test',
  DB_PASSWORD: process.env.DB_PASSWORD || 'password',
  DB_PORT: process.env.DB_PORT || 3306,
  DB_DIALECT: process.env.DB_DIALECT || 'postgres',
}


export default config