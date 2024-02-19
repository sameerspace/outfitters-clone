import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { ProductOptions } from './productOptions.entity';

/* 
  NOTE FOR FUTURE: 
  - Product Options like Color, Size will come from CMS with their key and values
  - Product Description will contain things like fit type, care, all in html that will be rendered
*/

@Entity()
export class Product {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  handle: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'enum', enum: ['men', 'women', 'juniors'], nullable: false })
  vendor: string;

  @ManyToMany(() => ProductOptions)
  @JoinTable({ name: 'product_product_options' })
  options: ProductOptions[];

  @BeforeInsert()
  generateUlid() {
    this.id = ulid();
  }
}
