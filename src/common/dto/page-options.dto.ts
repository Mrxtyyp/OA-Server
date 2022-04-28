import { ApiProperty } from '@nestjs/swagger';

/**
 * 基本分页查询类
 */
export class PageOptionsDto {
  @ApiProperty({ description: '页码', required: true, default: 1 })
  readonly page: number;

  @ApiProperty({ description: '每页条数', required: true, default: 10 })
  readonly size: number;
}
