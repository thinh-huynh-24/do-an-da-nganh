import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/decorators/customize';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // Cho phép mọi request mà không cần token
    return true;
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    // Bỏ qua lỗi xác thực và cho phép mọi request
    return user || {}; // hoặc return một object trống
  }
}
