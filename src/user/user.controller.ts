import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { UserService } from "./user.service";
import { Roles } from "../auth/decorator/roles.decorator";
import { CreateUserDto } from "./dto/create-user.dto";


@Controller('api/v1/users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class userController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Roles('admin')
  async create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto)
  }

  @Get()
  @Roles('admin')
  async listAll() {
    return this.userService.listAll();
  }
}