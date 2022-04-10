import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Recipes } from './entities/recipes.entity';

@Injectable()
export class RecipesServices {
  constructor(
    @InjectRepository(Recipes)
    private recipeRepository: Repository<Recipes>,
  ) {}

  async find(userId: number) {
    const result = await getRepository(Recipes)
      .createQueryBuilder()
      .select('"idRecipe"')
      .where('"userId" = :id', { id: userId })
      .getRawMany();

    console.log(result);
    return result;
  }
}
