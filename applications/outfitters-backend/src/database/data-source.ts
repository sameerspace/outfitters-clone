import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';
import { ProductOption } from '../products/entities/productOptions.entity';
import { Image } from '../products/entities/image.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User, Product, ProductOption, Image],
  migrationsTableName: 'migrations',
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  synchronize: process.env.ENVIRONMENT === 'test' ? true : false,
});
