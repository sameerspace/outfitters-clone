import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateUserTable1705496416048 implements MigrationInterface {
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
          new TableColumn({
            name: 'email',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'password',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'first_name',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'last_name',
            type: 'varchar',
            isNullable: false,
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
