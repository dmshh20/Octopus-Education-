import { MigrationInterface, QueryRunner } from "typeorm";

export class InitUserPurchaseAndSets1766853148337 implements MigrationInterface {
    name = 'InitUserPurchaseAndSets1766853148337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_purchases" ("id" SERIAL NOT NULL, "setId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_4415c40c02391c8376dde9ff1b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sets" ("id" SERIAL NOT NULL, "setName" character varying NOT NULL, "title" character varying NOT NULL, "level" character varying NOT NULL, "status" character varying NOT NULL, "image" character varying NOT NULL, "starsToUnlock" integer NOT NULL, CONSTRAINT "PK_5d15ed8b3e2a5cb6e9c9921d056" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sets"`);
        await queryRunner.query(`DROP TABLE "user_purchases"`);
    }

}
