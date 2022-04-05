import { LoadCompanyStructureRepository } from "@/data/contracts";
import { CompanyId, CompanyStructure } from "@/domain/entities/company-structure";
import { SectorTree } from "@/domain/entities/sector";
import { sectorsMock } from "@/infra/data-source/data-source";

export class FakeCompanyStructureRepository implements LoadCompanyStructureRepository {
  async loadCompanyStructure(companyId: CompanyId): Promise<CompanyStructure> {
    //exemplo de adpter caso a interface "DTO" fosse diferente do retornado do banco
    return {
      id: '',
      name: '',
      sectors: sectorsMock.map(s => ({
        company_owner: 'fxo',
        id: s.id,
        name: s.name,
        lines: []
      }))
    }
  };
}