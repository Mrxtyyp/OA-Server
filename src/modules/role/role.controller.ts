import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RoleEntity } from './entities/role.entity';
import { SearchRoleDDto } from './dto/search-role.dto';

@ApiTags('角色接口')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: '分页获取列表' })
  @ApiOkResponse({ type: [RoleEntity] })
  @Get('list')
  findAll(@Query() pageOption: SearchRoleDDto) {
    return this.roleService.findAll(
      pageOption.page,
      pageOption.size,
      pageOption.name,
    );
  }

  @ApiOperation({ summary: '详情' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @ApiOperation({ summary: '创建角色' })
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @ApiOperation({ summary: '编辑角色' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @ApiOperation({ summary: '删除角色' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
