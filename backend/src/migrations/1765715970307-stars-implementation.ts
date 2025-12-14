import { MigrationInterface, QueryRunner } from "typeorm";

export class StarsImplementation1765715970307 implements MigrationInterface {
    name = 'StarsImplementation1765715970307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "completed_sets" ("id" SERIAL NOT NULL, "setName" character varying NOT NULL, "score" integer NOT NULL DEFAULT '0', "dailyStars" TIMESTAMP DEFAULT now(), "userId" integer, CONSTRAINT "PK_a0f728d9c1f8260d9d4bb58155c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4f5cf36ed0fde9625d4275eb39" ON "completed_sets" ("userId", "setName", "dailyStars") `);
        await queryRunner.query(`ALTER TABLE "completed_sets" ADD CONSTRAINT "FK_3cc9d39fd4efb7fcb8bef9ebc57" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "completed_sets" DROP CONSTRAINT "FK_3cc9d39fd4efb7fcb8bef9ebc57"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4f5cf36ed0fde9625d4275eb39"`);
        await queryRunner.query(`DROP TABLE "completed_sets"`);
    }

}
