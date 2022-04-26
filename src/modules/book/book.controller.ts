import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from './book.service';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/hello')
  getHello() {
    return { data: this.bookService.getHello() };
  }
}
