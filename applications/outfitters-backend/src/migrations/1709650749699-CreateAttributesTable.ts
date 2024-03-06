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
        name: 'variant_attributes_attribute',
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
    await queryRunner.dropTable('variant_attributes_attribute');
    await queryRunner.dropTable('attribute');
  }
}
