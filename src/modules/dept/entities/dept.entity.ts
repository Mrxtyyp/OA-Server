import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sys_dept' })
export class DeptEntity extends AbstractBaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 255 })
  @ApiProperty({ description: '部门名称', required: true })
  name: string;

  @Column({ name: 'parent_id', nullable: true })
  @ApiProperty({ description: '父ID' })
  parentId?: number;

  @Column({ name: 'user_id', nullable: true })
  @ApiProperty({ description: '部门负责人' })
  userId?: number;
}
