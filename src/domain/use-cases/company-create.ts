import { AddCompany, Company } from "@/domain/entities";

export interface CreateCompany {
  create: (addCompany: AddCompany) => Promise<Company>;
}