import { LoadCompanyStructureRepository } from "@/data/contracts/load-company-structure.repository";
import { CompanyId, CompanyStructure } from "@/domain/entities";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export class CompanyStructureRepositoryImp implements LoadCompanyStructureRepository {
  async loadCompanyStructure(companyId: CompanyId): Promise<CompanyStructure> {
    try {
      const persisted = await prisma.company.findFirst({
        where: { id: companyId }, select: {
          id: true,
          name: true,
          sectors: {
            select: {
              companyId: true,
              id: true,
              name: true,
              lines: {
                select: {
                  sectorId:true,
                  id: true,
                  name: true,
                  machines: {
                    select: {
                      lineId: true,
                      id: true,
                      name: true,
                      equipments: {
                        select: {
                          machineId: true,
                          id: true,
                          name: true,
                          device: {
                            select: {
                              equipmentId: true,
                              id: true,
                              name: true,
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
      return persisted;
    } catch (error) {
      throw new Error('something is wrong in persistence sector layer');
    }
  }

}