import {
  Controller,
  Get,
  UseGuards,
  HttpStatus,
  HttpCode,
  Req,
} from '@nestjs/common';
import { Roles } from 'src/roles/roles.decorator';
import { RoleEnum } from 'src/roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles/roles.guard';
import { RecipesServices } from './recipes.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

interface User extends Request {
  user: {
    id: number;
    role: string[];
    iat: number;
    exp: number;
  };
}
@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Recipes')
@Controller({
  path: 'recipes',
  version: '1',
})
export class RecipesController {
  constructor(private readonly recipesServices: RecipesServices) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  find(@Req() request: User) {
    return this.recipesServices.find(request.user.id);
  }
}
