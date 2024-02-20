import {
  BeforeInsert,
  Column,
  Entity,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { Product } from './product.entity';

/* 
  In case of color, the value will contain the name of the color i.e "Grey blue",
  which will then be mapped to a url i.e /api/files/grey-blue.png to fetch the color icon image
*/

@Entity()
export class ProductOption {
  @PrimaryColumn()
  id: string;

  @Column()
  key: string;

  @Column({
    type: 'varchar',
    transformer: {
      to(value: string[]) {
        return value.join(',');
      },
      from(value: string) {
        return value.split(',');
      },
    },
  })
  values: string[];

  @ManyToMany(() => Product, (product) => product.options)
  products: Product[];

  @BeforeInsert()
  generateUlid() {
    this.id = ulid();
  }
}
