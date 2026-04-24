import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any) {
    if (info?.name === 'TokenExpiredError') {
      throw new UnauthorizedException(
        'Token expirado. Faça login novamente.',
      );
    }

    if (info?.name === 'JsonWebTokenError') {
      throw new UnauthorizedException(
        'Token inválido.',
      );
    }

    if (err || !user) {
      throw new UnauthorizedException(
        'Usuário não autenticado.',
      );
    }

    return user;
  }
}