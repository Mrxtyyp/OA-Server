import { ApiProperty } from '@nestjs/swagger';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';

export class SearchRoleDDto extends PageOptionsDto {
  @ApiProperty({ description: '角色姓名' })
  name?: string;
}
