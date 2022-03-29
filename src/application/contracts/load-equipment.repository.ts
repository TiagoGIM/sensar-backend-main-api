import { Equipment } from "@/application/models";

export interface LoadEquipmentRepository {
  loadEquipment : (equipmentId : string) => Promise<Equipment>;
}