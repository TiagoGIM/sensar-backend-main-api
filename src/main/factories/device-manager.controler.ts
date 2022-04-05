import { DeviceManagerImp } from "@/data/services/device";
import { DeviceRepositoryImp } from "@/infra/repositories/prisma-postgres/manager-device";
import { Controller } from "@/presentation/contracts";
import { CreateDeviceController } from "@/presentation/controllers/device-post";
import { UpdateDeviceController } from "@/presentation/controllers/device-update";
import { LoadEquipmentsDeviceController } from "@/presentation/controllers/load-equipment-devices";

export const makePostDeviceController = (): Controller => {
  const repo = new DeviceRepositoryImp();
  const createrService = new DeviceManagerImp(repo);
  return new CreateDeviceController(createrService);
}

export const makeUpdateDeviceController = (): Controller => {
  const repo = new DeviceRepositoryImp();
  const createrService = new DeviceManagerImp(repo);
  return new UpdateDeviceController(createrService);
}

export const makeLoadEquipmentsDeviceController = (): Controller => {
  const repo = new DeviceRepositoryImp();
  const createrService = new DeviceManagerImp(repo);
  return new LoadEquipmentsDeviceController(createrService);
}