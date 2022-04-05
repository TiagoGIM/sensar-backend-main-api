
import { EquipmentMenageRepository } from "@/data/contracts/manager-equipment.repository";
import { EquipmentBase } from "@/data/models";
import { AddEquipment, Equipment } from "@/domain/entities/equipment";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export class EquipmentRepositoryImp implements EquipmentMenageRepository {
  save(equipment: Equipment): Promise<Equipment> {
    throw new Error("Method not implemented.");
  }
  equipmentsByMachineId(machineId: string): Promise<EquipmentBase[]> {
    try {
      const persisted = prisma.equipment.findMany({select :{
        id : true,
        name : true,
      } ,where:{machine:{id:machineId}}});
      return persisted;
    } catch (error) {
      throw new Error('something is wrong in persistence sector layer get equipments by machine id');
    }
  }
  async create(equipment: AddEquipment): Promise<Equipment> {
    try {
      const persisted = await prisma.equipment.create({
        data: {
          name: equipment.name,
          machine: {
            connect: { id: equipment.machineId }
          }
        }
      });
      return persisted;

    } catch (error: any) {
      throw new Error('something is wrong in persistence sector layer create equipment');	
    }
  }
}