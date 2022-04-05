
import { CompanyId, CompanyStructure } from "@/domain/entities";
import { CompanyStructureLoader } from "@/domain/use-cases/company-structure-loader";
import { LoadCompanyStructureRepository } from "@/data/contracts";

export class CompanyStructureLoaderService implements CompanyStructureLoader {
  /**
   * um Repository é um adpter especializado em bd.
   * ele modifica a estrutura do dado
   * para ser compativel com a api entao nao ficamos dependente dela
   * mode de fazer é implementar um mapper.
   * quando não passamos nada pra o service ele é a penas um intermediario, code-smell
   * deve existir alguma regra pra esse service existir tipo tratamento de error.
   */
  constructor(private readonly loadCompanyStructureRepository: LoadCompanyStructureRepository) { }
  async load(companyId: CompanyId): Promise<CompanyStructure> {
    /**
     * Fazer os tratamentos caso nao exista Id nesse metodo
     */
    return await this.loadCompanyStructureRepository.loadCompanyStructure(companyId);
  }
}