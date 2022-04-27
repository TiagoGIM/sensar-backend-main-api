import { DeviceDataLoader } from "../../domain/use-cases/device-data";
import { HttpResponse,Controller } from "../contracts";
import {Request} from "@/utils/types/types";
export class LoadDeviceDataController implements Controller {
  constructor(private deviceDataLoader: DeviceDataLoader) {}
  async handle(request: Request): Promise<HttpResponse<any>> {
    console.log(request.params)
    return {
      statusCode: 200,
      data: await this.deviceDataLoader.getDeviceDataByMacAdress(request.params.macAddress)
    }
  }
}