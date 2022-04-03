import { CompanyId, CompanyStructure } from "@/domain/entities";

export interface CompanyStructureLoader {
  load: (companyId : CompanyId) => Promise<CompanyStructure>
}