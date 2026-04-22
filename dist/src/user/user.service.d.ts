import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
