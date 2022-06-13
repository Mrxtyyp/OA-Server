import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { ApiException } from 'src/common/exceptions/api.exception';
import { Repository, TreeRepository, EntityManager, Equal } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuEntity } from './entities/menu.entity';
import { MenuTreeEntity } from './entities/menu.tree.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private menuRepository: Repository<MenuEntity>, // @InjectEntityManager() // private entityManager: EntityManager,
  ) {}
  create(createMenuDto: CreateMenuDto) {
    return this.menuRepository.save(createMenuDto);
  }

  async findMenu() {
    const allMenus: any = [];
    const menus = await this.menuRepository.find({
      where: { parentId: -1 },
    });
    for (let i = 0; i < menus.length; i++) {
      const oneMenu = { ...menus[i], children: [] };
      oneMenu.children = await this.menuRepository.find({
        where: { parentId: oneMenu.id },
      });
      allMenus.push(oneMenu);
    }
    return allMenus;
  }

  findOne(id: number) {
    return this.menuRepository.findOneBy({ id: id });
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    await this.menuRepository.update({ id }, updateMenuDto);
    return null;
  }

  /**
   * 找到当前节点下的子节点数量
   * @param id 父节点ID
   * @returns 数量
   */
  findChildrenCount(id: number): Promise<number> {
    return this.menuRepository.count({ where: { parentId: id } });
  }

  async remove(id: number) {
    const childrenCount = await this.findChildrenCount(id);
    if (childrenCount > 0) {
      throw new ApiException(10005);
    } else {
      return this.menuRepository.delete([id]);
    }
  }

  async findTree(parentId: number) {
    const allMenus: any = [];
    // const menus = await this.menuRepository
    //   .createQueryBuilder('sys_menu')
    //   .where('sys_menu.id = :parentId', { parentId })
    //   .getMany();

    const menus = await this.menuRepository.find({
      where: { parentId: parentId ? parentId : -1 },
    });
    for (let i = 0; i < menus.length; i++) {
      const oneMenu = { ...menus[i], children: [], hasChildren: true };
      const findItem = await this.findTree(oneMenu.id);
      oneMenu.children = findItem;
      oneMenu.hasChildren = findItem.length ? true : false;
      allMenus.push(oneMenu);
    }
    return allMenus;
  }
}
