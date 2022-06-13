import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ description: '角色名称', required: true })
  @IsString()
  name: string;

  @ApiProperty({ description: '角色备注' })
  @IsString()
  remark: string;

  @ApiProperty({ description: '角色权限' })
  @IsString()
  permission: string;
}
