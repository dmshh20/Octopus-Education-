import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSetModel21766685999317 implements MigrationInterface {
    name = 'InitSetModel21766685999317'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sets" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "level" character varying NOT NULL, "status" character varying NOT NULL, "image" character varying NOT NULL, "starsToUnlock" integer NOT NULL, CONSTRAINT "PK_5d15ed8b3e2a5cb6e9c9921d056" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sets"`);
    }

}
