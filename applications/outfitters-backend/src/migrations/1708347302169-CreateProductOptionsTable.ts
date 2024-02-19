import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateProductOptionsTable1708347302169
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product_option',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            length: '26',
          }),
          new TableColumn({
            name: 'key',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'value',
            type: 'varchar',
            isNullable: false,
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product_option');
  }
}
