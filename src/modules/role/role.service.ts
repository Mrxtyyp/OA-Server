import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultPaginateDto } from 'src/common/dto/result-paginate.dto';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleEntity } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
  ) {}
  create(createRoleDto: CreateRoleDto) {
    return this.roleRepository.save(createRoleDto);
  }

  async findAll(page: number, size: number, name: string) {
    const queryBuilder = this.roleRepository.createQueryBuilder('sys_user');
    const [items, count] = await queryBuilder
      .where('sys_user.name like :name', { name: `%${name.toLowerCase()}%` })
      .skip((page - 1) * size)
      .take(size)
      .getManyAndCount();
    return new ResultPaginateDto<RoleEntity>(items, count);
  }

  findOne(id: number) {
    return this.roleRepository.findOneBy({ id: id });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.roleRepository.update({ id }, updateRoleDto);
    return null;
  }

  remove(id: number) {
    return this.roleRepository.delete([id]);
  }
}
