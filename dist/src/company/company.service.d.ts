import { PrismaService } from "../prisma/prisma.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
export declare class CompanyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCompanyDto): Promise<{
        id: string;
        name: string;
        email: string;
        apiKey: string;
        createdAt: Date;
    }>;
    listAll(): Promise<{
        id: string;
        name: string;
        email: string;
        apiKey: string;
        createdAt: Date;
    }[]>;
}
