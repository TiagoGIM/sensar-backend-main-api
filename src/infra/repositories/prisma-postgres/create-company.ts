import { LoadCompanyStructureRepository } from "@/data/contracts/load-company-structure.repository";
import { CompanyStructure, AddCompany, Company } from "@/domain/entities";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class PrismaPostgressCreateCompanyRepository implements LoadCompanyStructureRepository {
  loadCompanyStructure: (companyId: string) => Promise<CompanyStructure>;
  async create(addCompany: AddCompany): Promise<Company> {
    try {
      const createdCompany = await prisma.company.create({ data: addCompany});
      console.log(createdCompany)
     return createdCompany
    } catch (error) {
      console.log(error)
      throw new Error('something is wrong in persistence layer');
    }

  }
}