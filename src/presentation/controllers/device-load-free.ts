import { DeviceFreeLoader } from "../../domain/use-cases/device-free-load";
import { HttpResponse,Controller } from "../contracts";
import {Request} from '../../utils/types/types';

export class LoadDeviceFreeControler implements Controller {
  constructor(private deviceFreeLoader: DeviceFreeLoader) {}

  async handle(request: Request): Promise<HttpResponse<any>> {
    const devicesFree = await this.deviceFreeLoader.loadAll(request.params.companyId);
    return {
      statusCode: 200,
      data: devicesFree
    }
  }
}