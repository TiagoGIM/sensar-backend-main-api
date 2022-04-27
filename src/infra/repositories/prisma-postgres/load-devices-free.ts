import { LoadDeviceFreeRepository } from '@/data/contracts/load-device-free';
import { Device } from '@/domain/entities/device';
import { PrismaClient, Prisma } from "@prisma/client";


export class DeviceFreeRepositoryImp implements LoadDeviceFreeRepository {

  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async loadAll(companyId: string): Promise<Device[]> {
    try{
      const devices = await this.db.device.findMany({
        where: {
          equipmentId: null,
        }
      });
      return devices;
    } catch (error) {
      console.log(error)
      throw new Error('something is wrong in persistence layer');
    }
  }
}