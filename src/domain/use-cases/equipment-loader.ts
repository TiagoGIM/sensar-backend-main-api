import { Equipment } from "@/domain/entities/equipment";

// load carrega todos os dados de um determinado equipamento
export interface EquipmentLoader {
  load: (equipmentId : string) => Promise<Equipment>
}