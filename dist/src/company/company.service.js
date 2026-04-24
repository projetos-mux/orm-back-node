"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const crypto_1 = require("crypto");
const audit_log_service_1 = require("../audit-log/audit-log.service");
let CompanyService = class CompanyService {
    prisma;
    auditLogService;
    constructor(prisma, auditLogService) {
        this.prisma = prisma;
        this.auditLogService = auditLogService;
    }
    async create(dto) {
        const existing = await this.prisma.company.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new common_1.BadRequestException('Email já registrado');
        }
        const apiKey = (0, crypto_1.randomBytes)(24).toString('hex');
        return this.prisma.company.create({
            data: {
                name: dto.name,
                email: dto.email,
                apiKey,
            }
        });
    }
    async listAll() {
        return this.prisma.company.findMany({
            orderBy: { createdAt: 'desc' }
        });
    }
    async updateStatus(companyId, newStatus, currentUser) {
        const company = await this.prisma.company.findUnique({
            where: {
                id: companyId
            }
        });
        if (!company) {
            throw new common_1.NotFoundException('Empresa não encontrada');
        }
        if (currentUser.companyId === company.id && newStatus === 'DELETED') {
            throw new common_1.ForbiddenException('Você não pode deletar a sua própria empresa');
        }
        const activeUsers = await this.prisma.user.count({
            where: {
                companyId: company.id,
                status: 'ACTIVE'
            }
        });
        if (newStatus === 'DELETED' && activeUsers > 0) {
            throw new common_1.ForbiddenException('Não é possível deletar empresa com usuários ativos');
        }
        const oldStatus = company.status;
        const updateCompany = await this.prisma.company.update({
            where: {
                id: companyId
            },
            data: {
                status: newStatus
            }
        });
        await this.auditLogService.create({
            entityType: 'COMPANY',
            entityId: company.id,
            action: 'UPDATE_STATUS',
            oldValue: oldStatus,
            newValue: newStatus,
            performedByUserId: currentUser.userId,
            performedByName: currentUser.email,
        });
        return updateCompany;
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_log_service_1.AuditLogService])
], CompanyService);
//# sourceMappingURL=company.service.js.map