import { AddDevice, Device } from "@/domain/entities/device";
import { DeviceManager } from "@/domain/use-cases/device-manager";
import { ResponseCreateUpdate, StatusCreateUpdate } from "@/utils/types/types";
import { ManagerDeviceRepository } from "../contracts/manager-device.repository";
import { DeviceToUpdate } from "../models/interfaces";

export class DeviceManagerImp implements DeviceManager {
  constructor(private managerDeviceRepository: ManagerDeviceRepository) { }

  async create(device: AddDevice): Promise<ResponseCreateUpdate> {
    const resultOperation = await this.managerDeviceRepository.create(device);
    if ((await resultOperation).id) {
      return { id: resultOperation.id, status: StatusCreateUpdate.SUCESS }
    }
    return { id: '', status: StatusCreateUpdate.FAIL };
  }

  async update(device: Device): Promise<StatusCreateUpdate> {
    const toModelPersist: DeviceToUpdate = device;
    console.log(toModelPersist);
    const resultOperation = await this.managerDeviceRepository.save(toModelPersist);
    console.log(resultOperation)
    if (resultOperation) return StatusCreateUpdate.SUCESS;
    return StatusCreateUpdate.FAIL;
  }

  async load (equipmentId: string) :  Promise<Device[]> {
    return await this.managerDeviceRepository.devicesByEquipmentId(equipmentId);
  }
}