import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCareAndFitToProduct1709211911543 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
