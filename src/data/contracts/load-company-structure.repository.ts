import { InfrastrureTree } from "@/data/models";

export interface LoadCompanyStructureRepository {
  loadCompanyStructure : (companyId : string) => Promise<InfrastrureTree>;
}