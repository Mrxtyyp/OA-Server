import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateMenuDto {
  @ApiProperty({ description: '菜单名称', required: true })
  @IsString()
  name: string;

  @ApiProperty({ description: '标识符: 只有按钮类型才有' })
  @IsString()
  @ValidateIf((o) => o.type === 2)
  code?: string;

  @ApiProperty({ description: '菜单类型: 1是菜单2是按钮' })
  @IsString()
  @IsIn(['1', '2'])
  type: string;

  @ApiProperty({ description: '菜单路由' })
  @IsString()
  @ValidateIf((o) => o.type === 1)
  path?: string;

  @ApiProperty({ description: '菜单icon' })
  @IsString()
  @ValidateIf((o) => o.type === 1)
  icon?: string;

  @ApiProperty({ description: '父ID' })
  @IsNumber()
  parentId: number;
}
