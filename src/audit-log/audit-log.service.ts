import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Injectable()
export class AuditLogService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async create(dto: CreateAuditLogDto) {
    return this.prismaService.auditLog.create({
      data: {
        entityType: dto.entityType,
        entityId: dto.entityId,
        action: dto.action,
        oldValue: dto.oldValue,
        newValue: dto.newValue,
        performedByUserId: dto.performedByUserId,
        performedByName: dto.performedByName,
      },
    });
  }
}