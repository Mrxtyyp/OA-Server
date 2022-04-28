import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsIn,
  IsMobilePhone,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: '姓名', required: true })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({ description: '手机号', required: true })
  @IsMobilePhone()
  mobile: string;

  @ApiProperty({ description: '密码', required: true })
  @IsString()
  @MinLength(6)
  @Matches(/^[a-z0-9A-Z`~!#%^&*=+\\|{};:'\\",<>/?]+$/)
  password: string;

  @ApiProperty({ description: 'Eamil' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ description: '性别 0 男 1 女' })
  @IsIn(['0', '1'])
  @IsOptional()
  sex?: string;

  @ApiProperty({ description: '岗位' })
  job?: string;

  @ApiProperty({ description: '状态 1: 在职 2: 离职 3: 试用期' })
  @IsIn(['1', '2', '3'])
  @IsOptional()
  state: string;

  @ApiProperty({ description: '角色' })
  roleId?: string;
}
