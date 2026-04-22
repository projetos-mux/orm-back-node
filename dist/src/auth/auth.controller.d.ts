import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
