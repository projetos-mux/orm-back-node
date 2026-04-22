export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    companyId: string;
    role: 'admin' | 'mod' | 'recruiter';
}
