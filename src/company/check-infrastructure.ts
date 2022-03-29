import { InfrastrureTree } from "../models/interfaces";
import { ILoadInfrastrureReposisory } from "./repository/loadInfrastrureRepository.interface";

export class CheckInfrastructure {
  
  constructor(private loadInfratructureRepository: ILoadInfrastrureReposisory) { }

  async processInfrastructureTree({ companyId }: { companyId: string }): Promise<InfrastrureTree> {
    const infra = await this.loadInfratructureRepository.loadInfrastructureCompleteTree(companyId)
    return infra;
  }
}