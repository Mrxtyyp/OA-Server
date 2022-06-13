import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractBaseEntity } from 'src/common/entities/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'sys_role' })
export class RoleEntity extends AbstractBaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 255 })
  @ApiProperty({ description: '姓名', required: true })
  name: string;

  @Column({ length: 255 })
  @ApiProperty({ description: '备注' })
  remark: string;

  @Column({ length: 255 })
  @ApiProperty({ description: '权限' })
  permission: string;
}
