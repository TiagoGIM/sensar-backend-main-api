import { LoadCompanyStructureRepository } from "@/application/contracts";
import { InfrastrureTree } from "@/application/models";
import { sectorsMock } from "@/infra/data-source/data-source";

export class FakeCompanyStructureRepository implements LoadCompanyStructureRepository {
  async loadCompanyStructure(companyId: string) : Promise<InfrastrureTree>{
    //exemplo de adpter caso a interface "DTO" fosse diferente do retornado do banco
    return { sectors : sectorsMock.map( s => ({ 
      id: s.id,
      name: s.name,
      lines: s.lines
     })
    )}
  };
}