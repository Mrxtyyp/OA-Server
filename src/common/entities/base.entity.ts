import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractBaseEntity {
  @CreateDateColumn({
    name: 'create_time',
    type: 'timestamp',
    precision: 6,
  })
  @ApiProperty()
  createTime: Date;

  @Column({
    name: 'create_user',
    nullable: true,
  })
  @ApiProperty()
  createUser: string;

  @UpdateDateColumn({
    name: 'update_time',
    type: 'timestamp',
    precision: 6,
  })
  @ApiProperty()
  updateTime: Date;

  @Column({
    name: 'update_user',
    nullable: true,
  })
  @ApiProperty()
  updateUser: string;
}
