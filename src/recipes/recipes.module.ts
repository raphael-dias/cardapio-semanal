import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesServices } from './recipes.service';

@Module({
  imports: [],
  controllers: [RecipesController],
  providers: [RecipesServices],
  exports: [RecipesServices],
})
export class RecipesModule {}
