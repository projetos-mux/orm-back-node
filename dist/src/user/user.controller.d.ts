import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserStatusDto } from "./dto/update-user-status.dto";
export declare class userController {
    private readonly userService;
    constructor(userService: UserService);
    create(dto: CreateUserDto): Promise<{
        company: {
            id: string;
            name: string;
            email: string;
            status: import("@prisma/client").$Enums.Status;
            createdAt: Date;
            updatedAt: Date;
            apiKey: string;
        };
        role: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        email: string;
        password: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        roleId: string;
    }>;
    listAll(): Promise<({
        company: {
            id: string;
            name: string;
            email: string;
            status: import("@prisma/client").$Enums.Status;
            createdAt: Date;
            updatedAt: Date;
            apiKey: string;
        };
        role: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        email: string;
        password: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        roleId: string;
    })[]>;
    updateStatus(id: string, dto: UpdateUserStatusDto, req: any): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        roleId: string;
    }>;
}
