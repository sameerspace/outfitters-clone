import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAttributesTable1709650749699 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'attribute',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'varchar',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'attribute_variants_variant',
        columns: [
          {
            name: 'attributeId',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'variantId',
            type: 'varchar',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['attributeId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'attribute',
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['variantId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'variant',
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('attribute_variants_variant');
    await queryRunner.dropTable('attribute');
  }
}
