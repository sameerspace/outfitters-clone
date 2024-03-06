import {
  BeforeInsert,
  Column,
  Entity,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { Variant } from '../../products/entities/variant.entity';

@Entity()
export class Attribute {
  @PrimaryColumn()
  id: string;

  @Column('varchar')
  type: string;

  @Column('varchar')
  value: string;

  @ManyToMany(() => Variant, (variant) => variant.attributes)
  variants: Variant[];

  @BeforeInsert()
  generateUlid() {
    this.id = ulid();
  }
}
