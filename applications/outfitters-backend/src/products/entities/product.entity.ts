import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { Image } from './image.entity';
import { Variant } from './variant.entity';

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
        PrimaryColumn;
        return value?.split(',');
      },
    },
  })
  care: string[];

  @Column({ type: 'varchar', nullable: true })
  fit?: string;

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];

  @OneToMany(() => Variant, (variant) => variant.product)
  variants: Variant[];

  @BeforeInsert()
  generateUlid() {
    this.id = ulid();
  }
}
