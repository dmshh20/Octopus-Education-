import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProfileUrlToUser1763370085132 implements MigrationInterface {
    name = 'AddProfileUrlToUser1763370085132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "profileUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileUrl"`);
    }

}
