import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { CompanyController } from "./controller/company.controller";
import { CompanyService } from "./company.service";


@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [CompanyController],
  providers: [CompanyService],  
})

export class CompanyModule {}