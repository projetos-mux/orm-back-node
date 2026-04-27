import { BadRequestException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) { };

  async login(loginDto: LoginDto, apiKey?: string) {
    const { email, password } = loginDto;

    if (!apiKey) {
      throw new BadRequestException('Cabeçalho x-api-key é obrigatório');
    }

    const company = await this.prisma.company.findUnique({
      where: { apiKey },
    });

    if (!company) {
      throw new NotFoundException('Empresa não encontrada para esta chave de API');
    }

    if (company.status !== 'ACTIVE') {
      throw new ForbiddenException(
        'Empresa inativa ou bloqueada',
      );
    }

    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        role: true,
        company: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    if (user.status !== 'ACTIVE') {
      throw new ForbiddenException(
        'Usuário inativo ou bloqueado',
      );
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    if (user.companyId !== company.id) {
      throw new ForbiddenException('Usuário não pertence a esta empresa');
    }

    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      companyId: user.companyId,
      role: user.role.name as 'admin' | 'mod' | 'recruiter',
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      access_token: accessToken,
      token_type: 'bearer',
      expires_in: 3600,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        company_id: user.companyId,
        company_name: user.company.name,
        role: user.role.name,
      }
    }
  }
}