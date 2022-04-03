import { AddCompany, Company } from "@/domain/entities";
import { CompanyCreater } from "@/domain/use-cases/company-create";
import { CompanyCreateRepository } from "../contracts/company-create.respository";

export class CompanyCreate implements CompanyCreater {
  constructor(private createCompanyRpository: CompanyCreateRepository) { }
  async create(addCompany: AddCompany): Promise<Company> {
    return await this.createCompanyRpository.create(addCompany);
  }
}