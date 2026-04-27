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

  async getRecentResumes(companyId: string) {
    return this.prisma.resume.findMany({
      where: {
        companyId,
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 3,
      select: {
        id: true,
        fileName: true,
        fullName: true,
        email: true,
        confidence: true,
        processingMs: true,
        costBrl: true,
        createdAt: true,
        dataJson: true,
      },
    })
  }

  async softDeleteResume(id: string, companyId: string, userId: string, userName: string) {
    const resume = await this.prisma.resume.findFirst({
      where: {
        id,
        companyId,
        deletedAt: null
      },
    })

    if (!resume) {
      throw new NotFoundException('Currículo não encontrado');
    }

    await this.prisma.auditLog.create({
      data: {
        entityType: 'resume',
        entityId: id,
        action: 'SOFT_DELETE',
        oldValue: JSON.stringify(resume),
        newValue: null,
        performedByUserId: userId,
        performedByName: userName,
      },
    });

    return this.prisma.resume.update({
      where: {
        id
      },
      data: {
        deletedAt: new Date()
      }
    })
  }

  async hardDeleteResume(id: string, userId: string, userName: string) {
    const resume = await this.prisma.resume.findUnique({
      where: {
        id,
      }
    })

    if (!resume) {
      throw new NotFoundException('Currículo não encontrado')
    }

    await this.prisma.auditLog.create({
      data: {
        entityType: 'resume',
        entityId: id,
        action: 'HARD_DELETE',
        oldValue: JSON.stringify(resume),
        newValue: null,
        performedByUserId: userId,
        performedByName: userName,
      },
    });

    return this.prisma.resume.delete({
      where: {
        id,
      }
    })
  }

  async restoreResume(
    id: string,
    companyId: string,
    userId: string,
    userName: string
  ) {
    const resume = await this.prisma.resume.findFirst({
      where: { id, companyId, deletedAt: { not: null } }
    });

    if (!resume) {
      throw new NotFoundException('Currículo não encontrado');
    }

    await this.prisma.auditLog.create({
      data: {
        entityType: 'resume',
        entityId: id,
        action: 'RESTORE',
        oldValue: JSON.stringify(resume),
        newValue: JSON.stringify({
          deletedAt: null,
        }),
        performedByUserId: userId,
        performedByName: userName,
      },
    });

    return this.prisma.resume.update({
      where: {
        id,
      },
      data: {
        deletedAt: null,
      },
    });
  }

  async downloadResumePdf(
    id: string,
    companyId: string,
    userId: string,
    userName: string,
  ) {
    const resume = await this.prisma.resume.findFirst({
      where: {
        id,
        companyId,
        deletedAt: null,
      },
    });

    if (!resume) {
      throw new NotFoundException(
        'Currículo não encontrado',
      );
    }

    await this.prisma.auditLog.create({
      data: {
        entityType: 'resume',
        entityId: id,
        action: 'DOWNLOAD',
        oldValue: null,
        newValue: JSON.stringify({
          action: 'PDF_DOWNLOAD',
        }),
        performedByUserId: userId,
        performedByName: userName,
      },
    });

    return resume;
  }
}