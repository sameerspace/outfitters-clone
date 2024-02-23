import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDTO, CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductOption } from './entities/productOptions.entity';
import { Image } from './entities/image.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(ProductOption)
    private productOptionsRepository: Repository<ProductOption>,
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const options = await this.createBulk(
      this.productOptionsRepository,
      createProductDto.options,
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

    const createdProduct = await this.productRepository.save(product);

    await this.createBulkImages(createProductDto.images, createdProduct);

    return createdProduct;
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
    const { options, images, ...updateData } = updateProductDto;
    const productToUpdate = await this.findOne({ where: { id } });

    if (options) {
      await this.deleteOptionsByProductId(productToUpdate.id);

      productToUpdate.options = await this.createBulk(
        this.productOptionsRepository,
        options,
      );
    }

    if (images) {
      const existingImages = await this.imageRepository.find({
        where: { product: { id: productToUpdate.id } },
      });

      existingImages && (await this.imageRepository.remove(existingImages));
      await this.createBulkImages(images, productToUpdate);
    }

    const data = { ...productToUpdate, ...updateData };

    return this.productRepository.save(data);
  }

  async remove(id: string) {
    const product = await this.findOne({
      where: { id },
      relations: { options: true },
    });

    if (product.options) {
      await this.deleteOptionsByProductId(product.id);
    }

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

  async createBulk(repository: Repository<any>, records: any[]) {
    return await Promise.all(
      records.map((record) => {
        const data = repository.create(record);
        return repository.save(data);
      }),
    );
  }

  async createBulkImages(images: CreateImageDTO[], product: Product) {
    return await Promise.all(
      images.map((image) => {
        const img = this.imageRepository.create({ ...image, product });
        return this.imageRepository.save(img);
      }),
    );
  }
}
