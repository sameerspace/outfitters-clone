import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateProductOptionsJoinTable1708348326669
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product_product_options',
        columns: [
          new TableColumn({
            name: 'productId',
            type: 'varchar',
            length: '26',
            isPrimary: true,
          }),
          new TableColumn({
            name: 'productOptionId',
            type: 'varchar',
            length: '26',
            isPrimary: true,
          }),
        ],
      }),
    );

    await queryRunner.createForeignKeys('product_product_options', [
      new TableForeignKey({
        columnNames: ['productId'],
        referencedTableName: 'product',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['productOptionId'],
        referencedTableName: 'product_option',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product_product_options');
  }
}
