import { CompanyId, CompanyStructure} from "@/domain/entities";

export interface LoadCompanyStructureRepository {
  loadCompanyStructure : (companyId : CompanyId) => Promise<CompanyStructure>;
}