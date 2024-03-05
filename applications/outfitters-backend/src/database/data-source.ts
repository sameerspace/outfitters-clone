import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';
import { Image } from '../products/entities/image.entity';
import { Variant } from '../products/entities/variant.entity';
import { Attribute } from '../attributes/entities/attribute.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User, Product, Variant, Attribute, Image],
  migrationsTableName: 'migrations',
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  synchronize: process.env.ENVIRONMENT === 'test' ? true : false,
});
