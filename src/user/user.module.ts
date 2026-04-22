import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { userController } from "./user.controller";
import { UserService } from "./user.service";


@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [userController],
  providers: [UserService]
})

export class UserModule {}