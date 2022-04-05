import { ManagerDeviceRepository } from "@/data/contracts/manager-device.repository";
import { DeviceToUpdate } from "@/data/models";
import { AddDevice, Device,DeviceUnit } from "@/domain/entities/device";
import { EquipmentId } from "@/domain/entities/equipment";
import { PrismaClient } from "@prisma/client";

export class DeviceRepositoryImp implements ManagerDeviceRepository {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async devicesByEquipmentId(equipmentId: EquipmentId): Promise<Device[]> {
    console.log('prisma')
    const devices = await this.db.device.findMany({
      where: {
        equipment: {
          id: equipmentId,
        },
      },
    });
    return devices;
  }

  async create(device: AddDevice): Promise<DeviceUnit> {
    console.log("try create")
    try{
    const newDevice = await this.db.device.create({
      data: {
        macAddress: device.macAddress,
        name: device.name,
      },
    });
    console.log(newDevice)
    return newDevice;
  } catch (error: any) {
    console.error(error)
    throw new Error('something is wrong in persistence device layer');
  }
}
// verificar se o equipment deve ser usado na query
  async save(device: DeviceToUpdate): Promise<DeviceToUpdate> {
    const updatedDevice = await this.db.device.update({
      where: {
        id: device.id,
      },
      data: {
        ...device,
      },
    });
    return updatedDevice;
  }
}