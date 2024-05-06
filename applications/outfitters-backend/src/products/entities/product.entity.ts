import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { ProductOption } from './productOptions.entity';
import { Image } from './image.entity';

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

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'enum', enum: ['men', 'women', 'juniors'], nullable: false })
  vendor: string;

  @Column({
    type: 'varchar',
    transformer: {
      to(value: string[]) {
        return value?.join(',');
      },
      from(value: string) {
        return value?.split(',');
      },
    },
  })
  care: string[];

  @Column({ type: 'varchar', nullable: true })
  fit?: string;

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];

  @ManyToMany(() => ProductOption, (option) => option.products)
  @JoinTable({ name: 'product_product_options' })
  options: ProductOption[];

  @BeforeInsert()
  generateUlid() {
    this.id = ulid();
  }
}
