import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1761853453848 implements MigrationInterface {
    name = 'Init1761853453848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forms" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "secondName" character varying NOT NULL, "email" character varying(100) NOT NULL, CONSTRAINT "PK_ba062fd30b06814a60756f233da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_c4dbd208b35b05e4f7eb85ad2b" ON "forms" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_c4dbd208b35b05e4f7eb85ad2b"`);
        await queryRunner.query(`DROP TABLE "forms"`);
    }

}
