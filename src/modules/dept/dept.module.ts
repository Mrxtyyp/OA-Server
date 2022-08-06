import { Module } from '@nestjs/common';
import { DeptService } from './dept.service';
import { DeptController } from './dept.controller';
import { DeptEntity } from './entities/dept.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeptEntity])],
  controllers: [DeptController],
  providers: [DeptService],
})
export class DeptModule {}
