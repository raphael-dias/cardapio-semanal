import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRecipes1649461933061 implements MigrationInterface {
  name = 'CreateRecipes1649461933061';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "recipes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "idRecipe" SERIAL NOT NULL, "title" character varying NOT NULL DEFAULT '', "info" jsonb NOT NULL, "ingredients" jsonb NOT NULL, "preparation" jsonb NOT NULL, "others" character varying NOT NULL DEFAULT '', "favs" integer NOT NULL DEFAULT '0', "comments" character varying NOT NULL DEFAULT '', "shares" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "photoId" uuid, CONSTRAINT "PK_63dfc50f5a98d943f796e91a814" PRIMARY KEY ("id", "idRecipe"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "recipes" ADD CONSTRAINT "FK_ae25e86c83bd9a872a055325ab1" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recipes" DROP CONSTRAINT "FK_ae25e86c83bd9a872a055325ab1"`,
    );
    await queryRunner.query(`DROP TABLE "recipes"`);
  }
}
