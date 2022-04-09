import { EntityHelper } from 'src/utils/entity-helper';
import { InfoProperties } from 'src/utils/types/info-properties.type';
import { Ingredients } from 'src/utils/types/ingredients.types';
import { Preparation } from 'src/utils/types/preparations.type';
import { FileEntity } from '../../files/entities/file.entity';

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'recipes' })
export class Recipes extends EntityHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryGeneratedColumn('increment')
  idRecipe: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({ nullable: false, default: '' })
  title: string;

  @Column({
    type: 'jsonb',
  })
  public info: InfoProperties;

  @Column({
    type: 'jsonb',
  })
  public ingredients: Ingredients;

  @Column({
    type: 'jsonb',
  })
  public preparation: Preparation;

  @Column({ nullable: false, default: '' })
  others: string;

  @Column({ default: 0 })
  favs: number;

  @Column({ default: '' })
  comments: string;

  @Column({ default: 0 })
  shares: number;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photo?: FileEntity | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
