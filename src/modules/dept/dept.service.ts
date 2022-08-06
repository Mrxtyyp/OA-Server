import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeptDto } from './dto/create-dept.dto';
import { UpdateDeptDto } from './dto/update-dept.dto';
import { DeptEntity } from './entities/dept.entity';

@Injectable()
export class DeptService {
  constructor(
    @InjectRepository(DeptEntity)
    private deptRepository: Repository<DeptEntity>,
  ) {}
  create(createDeptDto: CreateDeptDto) {
    return 'This action adds a new dept';
  }

  findAll() {
    return `This action returns all dept`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dept`;
  }

  update(id: number, updateDeptDto: UpdateDeptDto) {
    return `This action updates a #${id} dept`;
  }

  remove(id: number) {
    return this.deptRepository.delete([id]);
  }
}
