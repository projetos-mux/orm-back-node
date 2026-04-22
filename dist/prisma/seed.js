"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.role.createMany({
        data: [
            { name: 'admin' },
            { name: 'mod' },
            { name: 'recruiter' },
        ],
        skipDuplicates: true,
    });
    const adminRole = await prisma.role.findUnique({
        where: {
            name: 'admin',
        },
    });
    if (!adminRole) {
        throw new Error('Role admin não encontrada');
    }
    let company = await prisma.company.findUnique({
        where: {
            email: 'paulo.paiva@kyoristech.com',
        },
    });
    if (!company) {
        company = await prisma.company.create({
            data: {
                name: 'Kyoris Tech',
                email: 'paulo.paiva@kyoristech.com',
                apiKey: 'kyoris-tech-dev-key',
            },
        });
    }
    const hashedPassword = await bcrypt.hash('P@ul02026', 10);
    const existingUser = await prisma.user.findUnique({
        where: {
            email: 'paulo.paiva@kyoristech.com',
        },
    });
    if (!existingUser) {
        await prisma.user.create({
            data: {
                name: 'Paulo Paiva',
                email: 'paulo.paiva@kyoristech.com',
                password: hashedPassword,
                companyId: company.id,
                roleId: adminRole.id,
            },
        });
    }
    console.log('Seed executado com sucesso 🚀');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map