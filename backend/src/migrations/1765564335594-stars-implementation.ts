import { MigrationInterface, QueryRunner } from "typeorm";

export class StarsImplementation1765564335594 implements MigrationInterface {
    name = 'StarsImplementation1765564335594'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "completed_sets" ("id" SERIAL NOT NULL, "setName" character varying NOT NULL, "score" integer NOT NULL DEFAULT '0', "dailyStars" TIMESTAMP DEFAULT now(), "userId" integer, CONSTRAINT "PK_a0f728d9c1f8260d9d4bb58155c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_9e2f1c9c3714fbf9e388cd4841" ON "completed_sets" ("userId", "setName") `);
        await queryRunner.query(`ALTER TABLE "completed_sets" ADD CONSTRAINT "FK_3cc9d39fd4efb7fcb8bef9ebc57" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "completed_sets" DROP CONSTRAINT "FK_3cc9d39fd4efb7fcb8bef9ebc57"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9e2f1c9c3714fbf9e388cd4841"`);
        await queryRunner.query(`DROP TABLE "completed_sets"`);
    }

}
