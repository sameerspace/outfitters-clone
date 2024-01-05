import dotenv from 'dotenv';

dotenv.config();

export const AppConfig = {
  database: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT),
    name: process.env.DATABASE_NAME,
  },
};
