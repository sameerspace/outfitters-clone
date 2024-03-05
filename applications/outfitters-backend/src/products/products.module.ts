import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Image } from './entities/image.entity';
import { Variant } from './entities/variant.entity';
import { AttributesService } from '../attributes/attributes.service';
import { AttributesModule } from '../attributes/attributes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Variant, Image]),
    AttributesModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
