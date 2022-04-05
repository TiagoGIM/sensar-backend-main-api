import { LineMenageRepository } from "@/data/contracts/manager-line.repository";
import { AddLine, Line } from "@/domain/entities/line";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export class PrismaPostgressLineRepository implements LineMenageRepository {
  async create(line: AddLine): Promise<Line> {
    try {
      const persisted = await prisma.line.create({
        data: {
          name: line.name,
          sector: {
            connect: { id: line.sectorId }
          }
        }
      })

      const lineDTO = {
        sectorId: persisted.sectorId,
        id: persisted.id,
        name: persisted.name
      }
      console.log(lineDTO)
      return lineDTO;

    } catch (error: any) {
      throw new Error('something is wrong in persistence sector layer');
    }
  }
}