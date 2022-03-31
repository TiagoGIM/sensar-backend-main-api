import { InfrastrureTree } from "@/application/models";

export interface LoadCompanyStructureRepository {
  loadCompanyStructure : (companyId : string) => Promise<InfrastrureTree>;
}