import { AddCompany, Company } from "@/domain/entities/company-structure";

export interface CompanyCreateRepository {
  create : (addCompany : AddCompany ) => Promise<Company>
}