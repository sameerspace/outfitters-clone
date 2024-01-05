import { AppConfig } from 'src/config/app.config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  host: AppConfig.database.host,
  port: AppConfig.database.port,
  username: AppConfig.database.username,
  database: AppConfig.database.name,
  password: AppConfig.database.password,
  type: 'postgres',
  migrationsTableName: 'migrations',
  migrations: ['src/migration/*.ts'],
  ssl: {
    rejectUnauthorized: false,
  },
});

export const connectToDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Connection Established with Database');
  } catch (error) {
    console.log(`Error Connecting to Database.\n${error}`);
  }
};
