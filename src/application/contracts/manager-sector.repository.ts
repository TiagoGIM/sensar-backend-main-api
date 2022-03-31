import { AddSector, SectorList } from "@/domain/entities";
import { Sector } from "@/domain/entities/sector";

export interface SectorManagerRepository {
  save(sector: Sector): Promise<Sector>;
  create(sector: AddSector): Promise<Sector>
  loadSectors(companiId: string): Promise<SectorList>;
} 