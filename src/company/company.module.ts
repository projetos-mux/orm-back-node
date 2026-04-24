import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { AuditLogModule } from "../audit-log/audit-log.module";


@Module({
  imports: [
    PrismaModule,
    AuthModule,
    AuditLogModule
  ],
  controllers: [CompanyController],
  providers: [CompanyService],  
})

export class CompanyModule {}