import { SectorManagerRepository } from "@/data/contracts/manager-sector.repository";
import { AddSector, Sector, SectorList } from "@/domain/entities";
import { PrismaClient } from '@prisma/client'

// Instantiate Prisma Client
const prisma = new PrismaClient()

export class PrismaPostgressSectorRepository implements SectorManagerRepository {
  async save(sector: Sector): Promise<Sector> {
    console.log("============================ UPDATE repository sector service =======================")
    
    try {
      //const foundSector = await prisma.sector.findUnique({where : {id : sector.id}})
      //console.log(foundSector)
      const persisted = await prisma.sector.update(
        {
          where: {
            id: sector.id
          },
          data: {
            name: sector.name
          }
        }
      );
      const sectorDTO = {
        company_owner: persisted.companyId,
        id: persisted.id,
        name: persisted.name
      }
      console.log('============= UPDATED ==============')
      return sectorDTO
    } catch (error) {
      console.log('=============  UPDATE ERROR ===============')
      console.log(error)
    }
    return { company_owner: undefined, id: undefined, name: undefined }
  }
  async create(sector: AddSector): Promise<Sector> {
    console.log("=============== Create repository sector service ===================")
    console.log(sector)
    try {
      const persisted = await prisma.sector.create({ data: sector });
      const sectorDTO = {
        company_owner: persisted.companyId,
        id: persisted.id,
        name: persisted.name
      }
      console.log("============== CREATED =======================")
      console.log(sectorDTO)
      return sectorDTO;

    } catch (error: any) {
      console.log(error)
      console.log('=============  CREATE ERROR ===============')
      return { company_owner: undefined, id: undefined, name: undefined }
    }
  }

  loadSectors(companiId: string): Promise<SectorList> {
    throw new Error("Method not implemented.");
  }

}