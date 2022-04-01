import { LoadCompanyStructureRepository } from "@/data/contracts";
import { InfrastrureTree } from "@/data/models";
import { CompanyStructure } from "@/domain/entities/company-structure";
import { sectorsMock } from "@/infra/data-source/data-source";

export class FakeCompanyStructureRepository implements LoadCompanyStructureRepository {
  async loadCompanyStructure(companyId: string) : Promise<InfrastrureTree>{
    //exemplo de adpter caso a interface "DTO" fosse diferente do retornado do banco
    const idCompany = companyId;
    console.log(companyId)
     const found =  { 'sectors' : sectorsMock.map( s => ({ 
      company_owner : 'fxo',
      id: s.id,
      name: s.name,
      lines: s.lines
     })
    )}
    console.log(found)
    return found
  };
}