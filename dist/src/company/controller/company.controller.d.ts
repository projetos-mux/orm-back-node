import { CompanyService } from "../company.service";
import { CreateCompanyDto } from "../dto/create-company.dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
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
