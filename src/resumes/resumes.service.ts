import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { ListResumeDto } from './dto/list-resume.dto';

@Injectable()
export class ResumesService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create(dto: CreateResumeDto, user: any) {
    return this.prisma.resume.create({
      data: {
        ...dto,
        companyId: user.companyId,
        createdById: user.id,
      },
    });
  }

  async findAll(user: any, query: ListResumeDto) {
    const isAdmin = user.role?.name === 'admin';

    const page = Number(query.page || 1);
    const pageSize = Number(query.pageSize || 10);
    const skip = (page - 1) * pageSize;

    const where: any = {
      deletedAt: null,
    };

    if (!isAdmin) {
      where.companyId = user.companyId;
    }

    if (query.fullName) {
      where.fullName = {
        contains: query.fullName,
        mode: 'insensitive',
      };
    }

    if (query.email) {
      where.email = {
        contains: query.email,
        mode: 'insensitive',
      };
    }

    if (query.confidenceMin) {
      where.confidence = {
        gte: Number(query.confidenceMin),
      };
    }

    const [data, total] = await Promise.all([
      this.prisma.resume.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          company: true,
          createdBy: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),

      this.prisma.resume.count({
        where,
      }),
    ]);

    return {
      data,
      pagination: {
        page,
        pageSize,
        totalItems: total,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }

  async remove(id: string, user: any) {
    const resume = await this.prisma.resume.findUnique({
      where: { id },
    });

    if (!resume || resume.deletedAt) {
      throw new NotFoundException('Currículo não encontrado');
    }

    const isAdmin = user.role?.name === 'admin';

    if (!isAdmin && resume.companyId !== user.companyId) {
      throw new ForbiddenException(
        'Você não pode excluir este currículo',
      );
    }

    return this.prisma.resume.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}