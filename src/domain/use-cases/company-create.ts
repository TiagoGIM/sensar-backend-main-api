import { AddCompany, Company } from "@/domain/entities";

export interface CompanyCreater {
  create: (addCompany: AddCompany) => Promise<Company>;
}