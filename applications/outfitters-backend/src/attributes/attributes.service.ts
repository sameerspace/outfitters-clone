import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class AttributesService {
  constructor(
    @InjectRepository(Attribute)
    private attributeRepository: Repository<Attribute>,
  ) {}

  create(createAttributeDto: CreateAttributeDto) {
    const attribute = this.attributeRepository.create(createAttributeDto);

    return this.attributeRepository.save(attribute);
  }

  findAll() {
    return this.attributeRepository.find();
  }

  findOne(options: FindOneOptions<Attribute> = {}): Promise<Attribute | null> {
    return this.attributeRepository.findOne(options);
  }

  find(options: FindManyOptions<Attribute> = {}): Promise<Attribute[] | null> {
    return this.attributeRepository.find(options);
  }

  update(id: number, updateAttributeDto: UpdateAttributeDto) {
    return `This action updates a #${id} attribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} attribute`;
  }
}
