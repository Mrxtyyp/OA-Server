import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDeptDto {
  @ApiProperty({ description: '菜单名称', required: true })
  @IsString()
  name: string;
}
