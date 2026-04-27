import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


export type AuthUser = {
  userId: string;
  name:string,
  email: string;
  companyId: string;
  role: 'admin' | 'mod' | 'recruiter';
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'orm-dev-secret',
    });
  }

  async validate(payload: {
    sub: string;
    name: string;
    email: string;
    companyId: string;
    role: 'admin' | 'mod' | 'recruiter';
  }): Promise<AuthUser> {
    return {
      userId: payload.sub,
      name: payload.name,
      email: payload.email,
      companyId: payload.companyId,
      role: payload.role,
    }
  };
}