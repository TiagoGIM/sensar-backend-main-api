
import { EquipmentMenageRepository } from "@/data/contracts/manager-equipment.repository";
import { AddEquipment, Equipment } from "@/domain/entities/equipment";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export class EquipmentRepositoryImp implements EquipmentMenageRepository {
  async create(equipment: AddEquipment): Promise<Equipment> {
    try {
      const persisted = await prisma.equipment.create({
        data: {
          name: equipment.name,
          machine: {
            connect: { id: equipment.machineId }
          }
        }
      })

      const EquipmentDTO = {
        machineId: persisted.machineId,
        id: persisted.id,
        name: persisted.name
      }
      console.log(EquipmentDTO)
      return EquipmentDTO;

    } catch (error: any) {
      throw new Error('something is wrong in persistence sector layer');
    }
  }
}