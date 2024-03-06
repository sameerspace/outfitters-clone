import ormConfig from './config/orm.config';
import ormConfigProd from './config/orm.config.prod';
import ormConfigTest from './config/orm.config.test';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { validate } from './utils/env.validation';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductsModule } from './products/products.module';
import { AttributesModule } from './attributes/attributes.module';

import dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig, ormConfigTest, ormConfigProd],
      expandVariables: true,
      validate,
    }),
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.ENVIRONMENT === 'test'
          ? ormConfigTest
          : process.env.ENVIRONMENT === 'production'
          ? ormConfigProd
          : ormConfig,
    }),
    UsersModule,
    AuthenticationModule,
    ProductsModule,
    AttributesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
