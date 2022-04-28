import { ApiProperty } from '@nestjs/swagger';
import { PageOptionsDto } from './page-options.dto';

export class ResultPaginateDto<T> extends PageOptionsDto {
  @ApiProperty({ isArray: true })
  readonly list: T[];

  @ApiProperty()
  readonly total: number;

  constructor(list: T[], total: number) {
    super();
    this.list = list;
    this.total = total;
  }
}
