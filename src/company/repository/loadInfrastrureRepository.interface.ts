import { InfrastrureTree } from "../models/interfaces";

export interface ILoadInfrastrureReposisory {
  companyId?: string;
  loadInfrastructureCompleteTree(companyId: string): Promise<InfrastrureTree>;
}