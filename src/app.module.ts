import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { AuditLogModule } from './audit-log/audit-log.module';
import { ResumesModule } from './resumes/resumes.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CompanyModule,
    UserModule,
    AuditLogModule,
    ResumesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
