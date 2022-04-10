import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipes } from './entities/recipes.entity';
import { RecipesController } from './recipes.controller';
import { RecipesServices } from './recipes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recipes])],
  controllers: [RecipesController],
  providers: [RecipesServices],
  exports: [RecipesServices],
})
export class RecipesModule {}
