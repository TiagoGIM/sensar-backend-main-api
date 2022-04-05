import { ResponseCreateUpdate } from "@/utils/types/types";
import { AddEquipment } from "../entities/equipment";

export interface EquipmentManager {
  create: (sector: AddEquipment) => Promise<ResponseCreateUpdate>
  //update: (sector: Line) => Promise<StatusCreateUpdate>
  //load: (companiId: string) => Promise<LineList>
}