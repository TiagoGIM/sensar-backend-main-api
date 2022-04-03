import { LoadCompanyStructureRepository } from "@/data/contracts/load-company-structure.repository";
import { CompanyStructure, AddCompany, Company } from "@/domain/entities";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class PrismaPostgressLoadCompanyRepository implements LoadCompanyStructureRepository {
  loadCompanyStructure: (companyId: string) => Promise<CompanyStructure>;
  create: (addCompany: AddCompany) => Promise<Company>;
}