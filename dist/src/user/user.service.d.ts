import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { AuthUser } from "../auth/strategies/jwt.strategy";
import { Status } from "@prisma/client";
import { AuditLogService } from "../audit-log/audit-log.service";
export declare class UserService {
    private readonly prismaService;
    private readonly auditLogService;
    constructor(prismaService: PrismaService, auditLogService: AuditLogService);
    create(dto: CreateUserDto): Promise<{
        company: {
            id: string;
            name: string;
            email: string;
            status: import("@prisma/client").$Enums.Status;
            createdAt: Date;
            updatedAt: Date;
            apiKey: string;
        };
        role: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        email: string;
        password: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        roleId: string;
    }>;
    listAll(): Promise<({
        company: {
            id: string;
            name: string;
            email: string;
            status: import("@prisma/client").$Enums.Status;
            createdAt: Date;
            updatedAt: Date;
            apiKey: string;
        };
        role: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        email: string;
        password: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        roleId: string;
    })[]>;
    updateStatus(targetUserId: string, newStatus: Status, currentUser: AuthUser): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        roleId: string;
    }>;
}
