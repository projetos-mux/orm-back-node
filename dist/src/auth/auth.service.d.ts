import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(loginDto: LoginDto, apiKey?: string): Promise<{
        access_token: string;
        token_type: string;
        expires_in: number;
        user: {
            id: string;
            name: string;
            email: string;
            company_id: string;
            company_name: string;
            role: string;
        };
    }>;
}
