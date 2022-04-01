import { Equipment } from "@/domain/entities/equipment";

export interface LoadEquipmentRepository {
  loadEquipment : (equipmentId : string) => Promise<Equipment>;
}