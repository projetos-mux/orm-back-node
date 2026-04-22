import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../../auth/guards/roles.guard";
import { CompanyService } from "../company.service";
import { CreateCompanyDto } from "../dto/create-company.dto";
import { Roles } from "../../auth/decorator/roles.decorator";


@Controller('api/v1/companies')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @Roles('admin')
  async create(@Body() dto: CreateCompanyDto) {
    return this.companyService.create(dto);
  }

  @Get()
  @Roles('admin')
  async listAll() {
    return this.companyService.listAll();
  }
}