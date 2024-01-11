import { DataSource } from 'typeorm';
import { User } from '../../dist/users/users.entity';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User],
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
