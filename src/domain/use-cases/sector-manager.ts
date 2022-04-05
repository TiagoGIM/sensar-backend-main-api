import {
  Sector,
  SectorList,
  CreateNewSectorStatus,
  AddSector
} from "@/domain/entities";
import { StatusCreateUpdate } from "@/utils/types/types";

export interface SectorManager {
  create: (sector: AddSector) => Promise<CreateNewSectorStatus>
  update: (sector: Sector) => Promise<StatusCreateUpdate>
  load: (companiId: string) => Promise<SectorList>
}