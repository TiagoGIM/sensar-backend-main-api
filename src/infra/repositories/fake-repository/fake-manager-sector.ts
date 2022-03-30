import { SectorManagerRepository } from "@/application/contracts/manager-sector.repository";
import { SectorList } from "@/domain/entities";
import { Sector } from "@/application/models";

export class FakeSectorRepository implements SectorManagerRepository {
  async save(sector: Sector): Promise<Sector> {

    console.log('cara pra salvar', sector)

  const sectorResponse  = {
    name: sector.name,
    id: sector.id,
    lines: []
  }
  return sectorResponse 
  }
  loadSectors(companiId: string): Promise<SectorList> {
    throw new Error("Method not implemented.");
  }
}