
import { DeviceDataLoaderImp } from "../../data/services/device-data";
import { LoadDeviceDataController } from "../../presentation/controllers/device-load-data";
import { Controller } from "../../presentation/contracts/controller";
import { ApiClientHttpImp } from "@/infra/clientApi/api-mqtt";
export const makeLoadDeviceData = () : Controller  => {
  const cliente =  new ApiClientHttpImp();
  const relatoryService = new DeviceDataLoaderImp(cliente);
  return new LoadDeviceDataController(relatoryService);
}