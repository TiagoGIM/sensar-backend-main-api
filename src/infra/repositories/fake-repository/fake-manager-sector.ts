import { SectorManagerRepository } from "@/data/contracts/manager-sector.repository";
import { AddSector, Sector, SectorList } from "@/domain/entities";

export class FakeSectorRepository implements SectorManagerRepository {
  create(sector: AddSector): Promise<Sector> {
    throw new Error("Method not implemented.");
  }
  async save(sector: Sector): Promise<Sector> {
  console.log('cara pra salvar', sector)

  const sectorResponse :Sector = {
    name: sector.name,
    id: sector.id,
    companyId : "mockada"
  }
  return sectorResponse 
  }
  loadSectors(companiId: string): Promise<SectorList> {
    throw new Error("Method not implemented.");
  }
}