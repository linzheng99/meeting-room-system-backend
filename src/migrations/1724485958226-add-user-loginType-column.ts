import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserLoginTypeColumn1724485958226 implements MigrationInterface {
  name = 'AddUserLoginTypeColumn1724485958226';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`loginType\` int NOT NULL COMMENT '登录类型, 0 用户名密码登录, 1 Google 登录, 2 Github 登录' DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`loginType\``);
  }
}
