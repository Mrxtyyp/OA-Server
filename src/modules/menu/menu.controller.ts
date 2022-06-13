import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuEntity } from './entities/menu.entity';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('菜单接口')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({ summary: '创建菜单' })
  @ApiOkResponse({ type: MenuEntity })
  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @ApiOperation({ summary: '获取首页菜单' })
  @ApiOkResponse({ type: [MenuEntity] })
  @Get('list')
  findMenu() {
    return this.menuService.findMenu();
  }

  @ApiOperation({ summary: '获取菜单树' })
  @ApiOkResponse({ type: [MenuEntity] })
  @Get('tree')
  findTree(@Query('parentId') parentId: number) {
    return this.menuService.findTree(parentId);
  }

  @ApiOperation({ summary: '详情' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @ApiOperation({ summary: '编辑菜单信息' })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }

  @ApiOperation({ summary: '删除菜单' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.menuService.remove(id);
  }
}
