import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { User } from '../../dist/users/users.entity';

const config: ConfigService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.get('DATABASE_HOST'),
  port: parseInt(config.get('DATABASE_PORT')!, 10),
  username: config.get('DATABASE_USERNAME'),
  password: config.get('DATABASE_PASSWORD'),
  database: config.get('DATABASE_NAME'),
  entities: [User],
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
