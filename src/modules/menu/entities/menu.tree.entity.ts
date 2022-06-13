import {
  Entity,
  JoinColumn,
  RelationId,
  Tree,
  TreeChildren,
  TreeParent,
  //   TreeParent,
  //   TreeLevelColumn,
} from 'typeorm';
import { MenuEntity } from './menu.entity';

@Entity({ name: 'sys_menu' })
@Tree('closure-table')
export class MenuTreeEntity extends MenuEntity {
  @TreeChildren()
  children: MenuTreeEntity[];

  //   @TreeParent()
  //   parent: MenuTreeEntity;
}
