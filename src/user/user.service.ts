import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(dto: CreateUserDto) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: dto.email }
    })

    if (existingUser) {
      throw new BadRequestException('Email já cadastrado');
    }

    const company = await this.prismaService.company.findUnique({
      where: { id: dto.companyId },
    })

    if (!company) {
      throw new NotFoundException('Empresa não encontrada');
    }

    const role = await this.prismaService.role.findUnique({
      where: { name: dto.role },
    })

    if (!role) {
      throw new NotFoundException('Permissão não encontrada');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.prismaService.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
        companyId: dto.companyId,
        roleId: role.id,
      },
      include: {
        company: true,
        role: true
      }
    })
  }

  async listAll() {
    return this.prismaService.user.findMany({
      include: {
        company: true,
        role: true,
      },
      orderBy: { createdAt: 'desc' },
    })
  }
}