import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/common/entities/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sys_user' })
export class UserEntity extends AbstractBaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 255 })
  @ApiProperty({ description: '姓名', required: true })
  name: string;

  @Column({ length: 50 })
  @ApiProperty({ description: '手机号', required: true })
  mobile: string;

  @Column({ name: 'password', length: 255 })
  @ApiProperty({ description: '密码', required: true })
  password: string;

  @Column({ length: 255 })
  @ApiProperty({ description: 'Eamil' })
  email?: string;

  @Column({ length: 10 })
  @ApiProperty({ description: '性别 0 男 1 女' })
  sex?: string;

  @Column({ length: 255 })
  @ApiProperty({ description: '岗位' })
  job?: string;

  @Column({ length: 10 })
  @ApiProperty({ description: '状态 1: 在职 2: 离职 3: 试用期' })
  state: string;

  @Column({ length: 255 })
  @ApiProperty({ description: '角色' })
  roleId: string;
}
