import { InfrastrureTree } from "@src/models/interfaces";

export interface LoadCompanyStructureRepository {
  loadCompanyStructure : (companyId : string) => Promise<InfrastrureTree>;
}