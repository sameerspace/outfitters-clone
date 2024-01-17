import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateUserTable1704981764901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          new TableColumn({
            name: 'id',
            isPrimary: true,
            type: 'varchar',
            length: '26',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
