import { DeviceFreeRepositoryImp } from "@/infra/repositories/prisma-postgres/load-devices-free";
import { Controller } from "@/presentation/contracts";
import { DeviceFreeLoaderImpl } from "../../data/services/device-free-load";
import { LoadDeviceFreeControler } from "../../presentation/controllers/device-load-free";
export const makeLoadDeviceFree = () : Controller  => {
  const repo = new DeviceFreeRepositoryImp();
  const createrService = new DeviceFreeLoaderImpl(repo)
  return new LoadDeviceFreeControler(createrService);
}