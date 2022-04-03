import { CreateNewSectorStatus, SectorList, StatusCreateUpdate, AddSector, Sector } from "@/domain/entities";
import { SectorManager } from "@/domain/use-cases";
import { SectorManagerRepository } from "@/data/contracts/manager-sector.repository";

export class SectorListManager implements SectorManager {
  constructor(private readonly managerSectorRepository: SectorManagerRepository) { }

  async create(sector: AddSector): Promise<CreateNewSectorStatus> {
    console.log("manageSector Repository Post")
    const resultOperation = await this.managerSectorRepository.create(sector);
    console.log(resultOperation)
    if ((await resultOperation).id) {
      return { id :resultOperation.id,  statusCreate : StatusCreateUpdate.SUCESS}
    }
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