import { Device, DeviceUnit } from "../../domain/entities/device";
import { DeviceFreeLoader } from "../../domain/use-cases/device-free-load";
import { LoadDeviceFreeRepository } from "../contracts/load-device-free";

export class DeviceFreeLoaderImpl implements DeviceFreeLoader {

  constructor(private loadDeviceFreeRepository: LoadDeviceFreeRepository) { }
  async loadAll(companyId: string): Promise<DeviceUnit[]> {
    const dataObject = await this.loadDeviceFreeRepository.loadAll(companyId);
    const deviceUnits: DeviceUnit[] = dataObject.map(device => {
      return {
        id: device.id,
        macAddress: device.macAddress,
        name: device.name,
      }
    }
    );
    return deviceUnits;
  }
}