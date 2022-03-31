import { CompanyStructure } from "@/domain/entities";

export interface CompanyStructureLoader {
  load: (companyId : string) => Promise<CompanyStructure>
}