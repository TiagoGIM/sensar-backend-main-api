import { DeviceManager } from "@/domain/use-cases/device-manager";
import { Controller } from "../contracts/controller";
import { Request, ResponseCreateUpdate, StatusCreateUpdate } from "@/utils/types/types";
import { HttpResponse, serverError } from "../contracts/http";
import { AddDevice } from "@/domain/entities/device";
import { ValidateFields } from "@/infra/helpers/validate";

export class CreateDeviceController implements Controller {

  constructor(readonly deviceManager: DeviceManager) { }
  
  async handle(request: Request): Promise<HttpResponse<ResponseCreateUpdate>> {
    const addDeviceDTO: AddDevice = {
      name: request.body.name,
      macAddress: request.body.macAddress,
    }
    const { errors, isValid } = ValidateFields.fieldsValidation(addDeviceDTO);
    if (!isValid) return {
      statusCode:400,
      data: { 
        status: StatusCreateUpdate.FAIL,
        error: errors
      }
    }
    try {
      const deviceToAdd : AddDevice = addDeviceDTO;
      const deviceCreated = await this.deviceManager.create(deviceToAdd);
      if( deviceCreated.status === StatusCreateUpdate.FAIL) {
        return {
          statusCode: 500,
          data: {
            id: undefined,
            status: StatusCreateUpdate.FAIL
          }
        }
      }
      return {
        statusCode: 201,
        data: {
          id: deviceCreated.id,
          status: StatusCreateUpdate.SUCESS
        }
      }
    } catch (error: any) {
      return serverError(error)
    }
  }
}