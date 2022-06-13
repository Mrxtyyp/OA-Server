import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // 如果有日志服务，可以在constructor,中挂载logger处理函数
  //   constructor() {}
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception);

    const ctx = host.switchToHttp(); // 获取请求上下文
    const response = ctx.getResponse(); // 获取请求上下文中的response对象
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR; // 获取异常状态码
    // 设置错误信息
    const message = status >= 500 ? exception.message : exception.getResponse();
    const errorResponse = {
      data: null,
      msg: message,
      code: status,
    };
    // 设置返回的状态码， 请求头，发送错误信息
    response.status(status === 200 ? 200 : 500);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
