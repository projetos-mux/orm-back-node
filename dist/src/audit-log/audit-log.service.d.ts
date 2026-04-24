import { PrismaService } from '../prisma/prisma.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';
export declare class AuditLogService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: CreateAuditLogDto): Promise<{
        id: string;
        createdAt: Date;
        entityType: string;
        entityId: string;
        action: string;
        oldValue: string | null;
        newValue: string | null;
        performedByName: string;
        performedByUserId: string;
    }>;
}
