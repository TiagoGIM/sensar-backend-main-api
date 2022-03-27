import { InfrastrureTree } from "./models/interfaces";
import { ILoadInfrastrureReposisory } from "./repositories/loadInfrastrureRepository.interface";

export class CheckInfrastructure {
  constructor(private loadInfratructureRepository: ILoadInfrastrureReposisory) { }
  async processInfrastructureTree({ companyId }: { companyId: string }): Promise<InfrastrureTree> {
    const infra = await this.loadInfratructureRepository.loadInfrastructureCompletTree(companyId)
    return infra;
  }
}