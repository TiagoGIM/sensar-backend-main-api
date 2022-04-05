import { SectorId } from "@/domain/entities";
import { LineId } from "@/domain/entities/line";

export type LineDTO = {
  id : LineId;
  name: string;
  sectorId : SectorId;
}
export type AddLineDTO = Omit<LineDTO ,'id'>