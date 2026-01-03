import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelations1767287702472 implements MigrationInterface {
    name = 'CreateRelations1767287702472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_purchases" ADD CONSTRAINT "FK_89b28b2d0561b98586e9208fb3f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_purchases" DROP CONSTRAINT "FK_89b28b2d0561b98586e9208fb3f"`);
    }

}
