import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { FindOneOptions, Repository } from 'typeorm';
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
    const options = await Promise.all(
      createProductDto.options.map((option) => {
        const record = this.productOptionsRepository.create(option);

        return this.productOptionsRepository.save(record);
      }),
    );

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

  findAll() {
    return this.productRepository.find();
  }

  async findOne(options: FindOneOptions<Product> = {}) {
    const product = await this.productRepository.findOne(options);

    if (!product) {
      throw new NotFoundException('Product Not Found');
    }

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
