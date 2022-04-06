import { ManagerDeviceRepository } from "@/data/contracts/manager-device.repository";
import { DeviceToUpdate } from "@/data/models";
import { AddDevice, Device, DeviceUnit } from "@/domain/entities/device";
import { EquipmentId } from "@/domain/entities/equipment";
import { PrismaClient, Prisma } from "@prisma/client";

export class DeviceRepositoryImp implements ManagerDeviceRepository {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async devicesByEquipmentId(equipmentId: EquipmentId): Promise<Device[]> {
    try {
      const devices = await this.db.device.findMany({
        where: {
          equipment: {
            id: equipmentId,
          },
        },
      });
      return devices;

    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(error.code)
        if (error.code === 'P2025') throw new Error(`Invalid equipmentId ${equipmentId}`);
      }
      throw new Error('something is wrong in persistence device layer');
    }
  }

  async create(device: AddDevice): Promise<DeviceUnit> {
    try {
      const newDevice = await this.db.device.create({
        data: {
          macAddress: device.macAddress,
          name: device.name,
        },
      });
      return newDevice;
    } catch (error: any) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(error.code)
        if (error.code === 'P2025') throw new Error(`Invalid ${device.macAddress}`);
      }
      throw new Error('something is wrong in persistence device layer');
    }
  }
  // verificar se o equipment deve ser usado na query
  async save(device: DeviceToUpdate): Promise<DeviceToUpdate> {
    try {
      const updatedDevice = await this.db.device.update({
        where: {
          id: device.id,
        },
        data: {
          ...device,
        },
      });
      return updatedDevice;  
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(error.code)
        if (error.code === 'P2025') throw new Error(`Invalid  notfound ${device.id} ID or properties dont exist`);
      }
      throw new Error(`something is wrong in persistence device layer code ${error.code}`);
      
    }
  }
}