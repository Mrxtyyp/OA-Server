import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sys_menu' })
export class MenuEntity extends AbstractBaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 255 })
  @ApiProperty({ description: '菜单名称', required: true })
  name: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty({ description: '标识符: 只有按钮类型才有' })
  code?: string;

  @Column({ length: 50 })
  @ApiProperty({ description: '菜单类型: 1是菜单2是按钮' })
  type: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty({ description: '菜单路由' })
  path?: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty({ description: '菜单icon' })
  icon?: string;

  @Column({ name: 'parent_id', nullable: true })
  @ApiProperty({ description: '父ID' })
  parentId?: number;
}
