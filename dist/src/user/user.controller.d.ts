import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class userController {
    private readonly userService;
    constructor(userService: UserService);
    create(dto: CreateUserDto): Promise<{
        role: {
            id: string;
            name: string;
        };
        company: {
            id: string;
            name: string;
            email: string;
            apiKey: string;
            createdAt: Date;
        };
    } & {
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        password: string;
        companyId: string;
        roleId: string;
    }>;
    listAll(): Promise<({
        role: {
            id: string;
            name: string;
        };
        company: {
            id: string;
            name: string;
            email: string;
            apiKey: string;
            createdAt: Date;
        };
    } & {
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        password: string;
        companyId: string;
        roleId: string;
    })[]>;
}
