import { AddCompany, Company } from "@/domain/entities";
import { CreateCompany } from "@/domain/use-cases/company-create";
import { CompanyCreateRepository } from "../contracts/company-create.respository";

export class CreateNewCompanyService implements CreateCompany {
  constructor(private createCompanyRpository: CompanyCreateRepository) { }
  async create(addCompany: AddCompany): Promise<Company> {
    return await this.createCompanyRpository.create(addCompany);
  }
}