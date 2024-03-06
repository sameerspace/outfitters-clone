import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { Product } from './product.entity';
import { Attribute } from '../../attributes/entities/attribute.entity';

@Entity()
export class Variant {
  @PrimaryColumn()
  id: string;

  @Column('varchar')
  sku: string;

  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;

  @ManyToMany(() => Attribute, (attribute) => attribute.variants)
  @JoinTable()
  attributes: Attribute[];

  @BeforeInsert()
  generateUlid() {
    this.id = ulid();
  }
}
