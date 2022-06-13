import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

// import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  // 允许跨域
  app.use(cors());

  //   body转json
  app.use(bodyParser.json());

  // 自定义 logger
  //   app.useLogger(app.get(Logger));

  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 配置全局拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());

  // 全局的验证管道
  app.useGlobalPipes(new ValidationPipe());

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
