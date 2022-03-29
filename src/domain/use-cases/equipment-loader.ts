import { Equipment } from "@/domain/entities";

export interface EquipmentLoader {
  load: (equipimentId : string) => Promise<Equipment>
}