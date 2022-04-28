import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultPaginateDto } from 'src/common/dto/result-paginate.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async findAll(page: number, size: number) {
    const queryBuilder = this.userRepository.createQueryBuilder('sys_user');
    const [items, count] = await queryBuilder
      .skip((page - 1) * size)
      .take(size)
      .getManyAndCount();
    return new ResultPaginateDto<UserEntity>(items, count);
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update({ id }, updateUserDto);
    return null;
  }

  remove(id: number) {
    return this.userRepository.delete([id]);
  }
}
