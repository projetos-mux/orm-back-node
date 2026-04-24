import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { updateCompanyStatusDto } from "./dto/update-company-status.dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(dto: CreateCompanyDto): Promise<{
        id: string;
        name: string;
        email: string;
        apiKey: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }>;
    listAll(): Promise<{
        id: string;
        name: string;
        email: string;
        apiKey: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateStatus(id: string, dto: updateCompanyStatusDto, req: any): Promise<{
        id: string;
        name: string;
        email: string;
        apiKey: string;
        status: import("@prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
