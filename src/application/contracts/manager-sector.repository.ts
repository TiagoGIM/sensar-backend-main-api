import { Sector, SectorList } from "@/domain/entities";

export interface SectorManagerRepository {
  save(sector: Sector): Promise<Sector>;
  loadSectors(companiId: string): Promise<SectorList>;
}