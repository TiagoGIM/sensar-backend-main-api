import { SectorManagerRepository } from "@/data/contracts/manager-sector.repository";
import { AddSector, Sector, SectorList } from "@/domain/entities";
import { PrismaClient, Prisma  } from '@prisma/client'

const prisma = new PrismaClient()

export class PrismaPostgressSectorRepository implements SectorManagerRepository {
  async save(sector: Sector): Promise<Sector> {
    console.log("> UPDATE repository sector service")
    try {
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
        companyId: persisted.companyId,
        id: persisted.id,
        name: persisted.name
      }
      return sectorDTO
    } catch (error) {
      console.log('> UPDATE ERROR !')
      throw new Error('something is wrong in persistence sector layer');
    }
  }
  async create(sector: AddSector): Promise<Sector> {
    console.log("> Create repository sector service ")
    console.log(sector)
    try {
      const persistedSector = await prisma.sector.create({
        data: {
          name: sector.name,
          company_owner: {
            connect: { id: sector.companyId },
          },
        },
      })

      const sectorDTO = {
        companyId: persistedSector.companyId,
        id: persistedSector.id,
        name: persistedSector.name
      }
      console.log(sectorDTO)
      return sectorDTO;

    } catch (error: any) {
      if(error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(error.code)
        if (error.code === 'P2025') throw new Error('Invalid CompanyId');
      }
      throw new Error('something is wrong in persistence sector layer');
    }
  }

  async loadSectors(companiId: string): Promise<Sector[]> {
    console.log("> Load repository sector service ")
    console.log(companiId)
    const found = await prisma.sector.findMany({
      where: {
        company_owner: {
          id: companiId
        }
      }
    });

    return  found
  }
}