import { Body, Controller, Headers, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";


@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Headers('x-api-key') apiKey?: string,
  ) {
    return this.authService.login(loginDto, apiKey)
  }
}