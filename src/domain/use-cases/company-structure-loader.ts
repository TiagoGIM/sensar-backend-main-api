import { CompanyStructure } from "@src/domain/entities/company-structure";

export interface CompanyStructureLoader {
  load: (companyId : string) => Promise<CompanyStructure>
}