import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { Product } from './product.entity';

@Entity()
export class Image {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  alt: string;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;

  @BeforeInsert()
  generateUlid() {
    this.id = ulid();
  }
}
