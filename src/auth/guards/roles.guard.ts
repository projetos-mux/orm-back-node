import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorator/roles.decorator";
import { AuthUser } from "../strategies/jwt.strategy";


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<
      Array<'admin' | 'mod' | 'recruiter'>>(ROLES_KEY, [context.getHandler(), context.getClass()]);
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const request = context.switchToHttp().getRequest<{ user: AuthUser }>();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('Usuário não encontrado');
    }

    if (!!requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Sem permissão para esta operação');
    }

    return true;
  }
}