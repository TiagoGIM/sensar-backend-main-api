
import { MachineMenageRepository } from "@/data/contracts/manager-machine.repository";
import { AddMachine, Machine } from "@/domain/entities/machine";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export class PrismaPostgressMachineRepository implements MachineMenageRepository {
  async create(machine: AddMachine): Promise<Machine> {
    try {
      const persisted = await prisma.machine.create({
        data: {
          name: machine.name,
          line: {
            connect: { id: machine.lineId }
          }
        }
      })

      const machineDTO = {
        lineId: persisted.lineId,
        id: persisted.id,
        name: persisted.name
      }
      console.log(machineDTO)
      return machineDTO;

    } catch (error: any) {
      throw new Error('something is wrong in persistence sector layer');
    }
  }
}