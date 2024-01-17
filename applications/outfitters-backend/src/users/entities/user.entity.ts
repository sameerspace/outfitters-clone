import { BeforeInsert, Entity, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @BeforeInsert()
  generateUlid() {
    this.id = ulid();
  }
}
