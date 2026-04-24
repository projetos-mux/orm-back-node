import { PrismaService } from "../prisma/prisma.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { AuditLogService } from "../audit-log/audit-log.service";
import { AuthUser } from "../auth/strategies/jwt.strategy";
import { Status } from "@prisma/client";
export declare class CompanyService {
    private readonly prisma;
    private readonly auditLogService;
    constructor(prisma: PrismaService, auditLogService: AuditLogService);
    create(dto: CreateCompanyDto): Promise<{
        id: string;
        name: string;
        email: string;
        apiKey: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }>;
    listAll(): Promise<{
        id: string;
        name: string;
        email: string;
        apiKey: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateStatus(companyId: string, newStatus: Status, currentUser: AuthUser): Promise<{
        id: string;
        name: string;
        email: string;
        apiKey: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
