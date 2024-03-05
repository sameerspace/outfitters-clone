import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDTO, CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { FindManyOptions, FindOneOptions, In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Variant } from './entities/variant.entity';
import { generateHandle } from '../utils/generateHandle';
import { AttributesService } from '../attributes/attributes.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Variant)
    private variantRepository: Repository<Variant>,
    @InjectRepository(Image) private imageRepository: Repository<Image>,
    private readonly attributeService: AttributesService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const { variants, ...productData } = createProductDto;

    const product = this.productRepository.create({
      ...productData,
      handle: generateHandle(),
    });

    product.variants = await Promise.all(
      variants?.map(async (variant) => {
        const attributes = await this.attributeService.find({
          where: { id: In(variant.attributes) },
        });
        const createdVariant = this.variantRepository.create({
          sku: variant.sku,
          attributes: attributes!,
        });

        return await this.variantRepository.save(createdVariant);
      }),
    );

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
    const { images, ...updateData } = updateProductDto;
    const productToUpdate = await this.findOne({
      where: { id },
      relations: {
        variants: true,
      },
    });

    if (images) {
      const existingImages = await this.imageRepository.find({
        where: { product: { id: productToUpdate.id } },
      });

      existingImages && (await this.imageRepository.remove(existingImages));
      await this.createBulkImages(images, productToUpdate);
    }

    const data = { ...productToUpdate, ...updateData, variants: [] };

    return this.productRepository.save(data);
  }

  async remove(id: string) {
    const product = await this.findOne({
      where: { id },
    });

    return await this.productRepository.remove(product);
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
