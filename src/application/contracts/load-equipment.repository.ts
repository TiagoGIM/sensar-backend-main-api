import { Equipment } from "@/domain/entities";

export interface LoadEquipmentRepository {
  loadEquipment : (equipmentId : string) => Promise<Equipment>;
}