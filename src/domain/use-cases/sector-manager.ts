import { Sector,SectorList, CreateSectorStatus, StatusCreateUpdate } from "@/domain/entities";

export interface SectorManager {
  create: (sector : Sector) => Promise<CreateSectorStatus>
  update: (sector : Sector) => Promise<StatusCreateUpdate>
  load: (companiId :string) => Promise<SectorList>
}