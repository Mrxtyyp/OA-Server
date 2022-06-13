import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MenuEntity } from './entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MenuTreeEntity } from './entities/menu.tree.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
