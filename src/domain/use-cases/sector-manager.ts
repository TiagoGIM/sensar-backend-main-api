import {
  Sector,
  SectorList,
  CreateSectorStatus,
  StatusCreateUpdate,
  AddSector
} from "@/domain/entities";

export interface SectorManager {
  create: (sector: AddSector) => Promise<CreateSectorStatus>
  update: (sector: Sector) => Promise<StatusCreateUpdate>
  load: (companiId: string) => Promise<SectorList>
}