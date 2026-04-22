import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { randomBytes } from "crypto";


@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCompanyDto) {
    const existing = await this.prisma.company.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new BadRequestException('Email já registrado');
    }

    const apiKey = randomBytes(24).toString('hex');

    return this.prisma.company.create({
      data: {
        name: dto.name,
        email: dto.email,
        apiKey,
      }
    })
  }

  async listAll() {
    return this.prisma.company.findMany({
      orderBy: { createdAt: 'desc' }
    })
  }
}