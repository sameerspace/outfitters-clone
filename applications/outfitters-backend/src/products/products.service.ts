import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateProductDto,
  CreateProductOptionsDTO,
} from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductOption } from './entities/productOptions.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(ProductOption)
    private productOptionsRepository: Repository<ProductOption>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const options = await this.createBulkOptions(createProductDto.options);

    const { options: _, ...prod } = createProductDto;

    // TODO: Add logic to generate handle
    const handle = `f${Math.floor(Math.random() * 9000)}-${Math.floor(
      Math.random() * 900,
    )}`;

    const product = this.productRepository.create({
      options,
      ...prod,
      handle,
    });

    return await this.productRepository.save(product);
  }

  findAll(options: FindManyOptions<Product> = {}) {
    return this.productRepository.find(options);
  }

  async findOne(options: FindOneOptions<Product> = {}) {
    const product = await this.productRepository.findOne(options);

    if (!product) {
      throw new NotFoundException('Product Not Found');
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { options } = updateProductDto;
    const productToUpdate = await this.findOne({ where: { id } });

    if (options) {
      await this.deleteOptionsByProductId(productToUpdate.id);

      productToUpdate.options = await this.createBulkOptions(options);
    }

    const data = { ...productToUpdate, ...updateProductDto };

    return this.productRepository.save(data);
  }

  async remove(id: string) {
    const product = await this.findOne({ where: { id } });
    await this.deleteOptionsByProductId(product.id);

    return await this.productRepository.remove(product);
  }

  async deleteOptionsByProductId(productId: string) {
    const existingProductOptions = await this.productOptionsRepository.find({
      where: {
        products: { id: productId },
      },
    });

    if (existingProductOptions.length == 0) {
      throw new NotFoundException('Option(s) Not Found');
    }

    return await this.productOptionsRepository.remove(existingProductOptions);
  }

  async createBulkOptions(options: CreateProductOptionsDTO[]) {
    return await Promise.all(
      options.map((option) => {
        const record = this.productOptionsRepository.create(option);

        return this.productOptionsRepository.save(record);
      }),
    );
  }
}
