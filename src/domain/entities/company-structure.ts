
import { SectorTree } from "@/domain/entities//sector";
//https://medium.com/@gara.mohamed/domain-driven-design-the-identifier-type-pattern-d86fd3c128b3#:~:text=The%20key%20difference%20between%20an,Value%20Objects%20have%20no%20identity.
export type CompanyId  = string;

export type CompanyStructure = {
  id : CompanyId;
  name : string
  sectors?: SectorTree[];
}

export type  Company = Omit<CompanyStructure,'id'>;

export type AddCompany = Omit<Company , 'companyId'>;