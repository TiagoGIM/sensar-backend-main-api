import { LoadCompanyStructureRepository } from "@/data/contracts";
import { CompanyId, CompanyStructure } from "@/domain/entities/company-structure";
import { sectorsMock } from "@/infra/data-source/data-source";

export class FakeCompanyStructureRepository implements LoadCompanyStructureRepository {
  async loadCompanyStructure(companyId: CompanyId): Promise<CompanyStructure> {
    //exemplo de adpter caso a interface "DTO" fosse diferente do retornado do banco
    return {
      id: '',
      name: '',
      sectors: sectorsMock.map(s => ({
        company_owner: 'fxo',
        id: '123',
        name: s.name,
        lines: s.lines
      }))
    }
  };
}