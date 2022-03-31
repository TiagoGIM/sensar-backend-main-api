import { CreateSectorStatus, SectorList, StatusCreateUpdate, AddSector, Sector } from "@/domain/entities";
import { SectorManager } from "@/domain/use-cases";
import { SectorManagerRepository } from "@/application/contracts/manager-sector.repository";

export class SectorListManager implements SectorManager {
  constructor(private readonly managerSectorRepository: SectorManagerRepository) { }

  async create(sector: AddSector): Promise<CreateSectorStatus> {
    const resultOperation = this.managerSectorRepository.create(sector);
    if (resultOperation) return { id :'12',  statusCreate : StatusCreateUpdate.SUCESS}
    return { id :'',  statusCreate : StatusCreateUpdate.FAIL };
  };

  async update(sector: Sector): Promise<StatusCreateUpdate> {
    const resultOperation = await this.managerSectorRepository.save(sector);
    console.log(resultOperation)
    if (resultOperation) return StatusCreateUpdate.SUCESS;
    return StatusCreateUpdate.FAIL;
  }

  async load(companiId: string): Promise<SectorList> {
    return this.managerSectorRepository.loadSectors(companiId);
  };
}