import { EquipmentLoader } from "@/domain/use-cases/equipment-loader";
import { LoadEquipmentRepository } from "@/data/contracts"
import { Equipment } from "@/domain/entities/equipment";

export class EquipmentLoaderService implements EquipmentLoader {
  /**
   * um Repository é um adpter especializado em bd.
   * ele modifica a estrutura do dado
   * para ser compativel com a api entao nao ficamos dependente dela
   * mode de fazer é implementar um mapper.
   * quando não passamos nada pra o service ele é a penas um intermediario, code-smell
   * deve existir alguma regra pra esse service existir tipo tratamento de error.
   */
  constructor(private readonly loadCompanyStructureRepository: LoadEquipmentRepository) { }
  async load(equipmentId: string): Promise<Equipment> {
    /**
     * Fazer os tratamentos caso nao exista Id nesse metodo
     */
    return this.loadCompanyStructureRepository.loadEquipment(equipmentId);
  }
}