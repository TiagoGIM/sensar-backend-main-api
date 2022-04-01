import {
  Sector,
  SectorList,
  CreateNewSectorStatus,
  StatusCreateUpdate,
  AddSector
} from "@/domain/entities";

export interface SectorManager {
  create: (sector: AddSector) => Promise<CreateNewSectorStatus>
  update: (sector: Sector) => Promise<StatusCreateUpdate>
  load: (companiId: string) => Promise<SectorList>
}