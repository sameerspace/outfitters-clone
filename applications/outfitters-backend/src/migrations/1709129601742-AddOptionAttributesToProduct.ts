import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddOptionAttributesToProduct1709129601742
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product_product_options');
    await queryRunner.dropTable('product_option');

    await queryRunner.addColumns('product', [
      new TableColumn({
        name: 'care',
        type: 'varchar',
        isNullable: false,
      }),
      new TableColumn({
        name: 'fit',
        type: 'varchar',
        isNullable: true,
      }),
    ]);

    await queryRunner.changeColumn(
      'product',
      'description',
      new TableColumn({
        name: 'description',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
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
            name: 'values',
            type: 'varchar',
            isNullable: false,
          }),
        ],
      }),
    );

    await queryRunner.dropColumns('product', ['care', 'fit']);

    await queryRunner.changeColumn(
      'product',
      'description',
      new TableColumn({
        name: 'description',
        type: 'varchar',
        isNullable: false,
      }),
    );
  }
}
