import { Device } from "@/domain/entities/device";
import { DeviceManager } from "@/domain/use-cases/device-manager";
import { ValidateFields } from "@/infra/helpers/validate";
import { Request, ResponseCreateUpdate, StatusCreateUpdate } from "@/utils/types/types";
import { HttpResponse, serverError } from "../contracts";
import { Controller } from "../contracts/controller";

export class UpdateDeviceController implements Controller {
  constructor(private deviceManager: DeviceManager) { }
  async handle(request: Request): Promise<HttpResponse<ResponseCreateUpdate>> {
    const device: Device = {
      id: request.body.id,
      name: request.body.name,
      macAddress: request.body.macAddress,
      equipmentId: request.body.equipmentId
    }
    const { errors, isValid } = ValidateFields.fieldsValidation(device);
    if (!isValid) return {
      statusCode: 400,
      data: {
        status: StatusCreateUpdate.FAIL,
        error: errors,
      }
    }
      try {
        const statusUpdate = await this.deviceManager.update(device);
        return {
          statusCode: 201,
          data: { status: statusUpdate }
        }
      }
      catch (error: any) {
        return serverError(error)
      }
    }
  }