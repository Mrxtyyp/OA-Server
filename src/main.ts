import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { logger } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 允许跨域
  app.use(cors());

  //   body转json
  app.use(bodyParser.json());

  // 日志中间件
  app.use(logger);

  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 配置全局拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());

  // 配置 Swagger 文档
  const options = new DocumentBuilder()
    .setTitle('OA 后端文档')
    .setDescription('请小心使用')
    .setVersion('1.0')
    // .addTag('book') // 特定标签 @ApiUseTags('book') 这样加入标签里面
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();