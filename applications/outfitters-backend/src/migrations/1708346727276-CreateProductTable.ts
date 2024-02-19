import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateProductTable1708346727276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            length: '26',
          }),
          new TableColumn({
            name: 'title',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'handle',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'description',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'price',
            type: 'int',
            isNullable: false,
          }),
          new TableColumn({
            name: 'vendor',
            type: 'enum',
            enum: ['men', 'women', 'juniors'],
            isNullable: false,
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product');
  }
}
