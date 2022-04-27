import { DeviceManager } from "@/domain/use-cases/device-manager";
import { Controller } from "../contracts/controller";
import { HttpResponse, serverError } from "../contracts";
import { Device } from "@/domain/entities/device";
import { Request } from "express";
import { ValidateFields } from "@/infra/helpers/validate";


export class LoadEquipmentsDeviceController implements Controller {
  constructor(readonly deviceManager: DeviceManager) { }
  //deveria retornar view model
  async handle(request?: Request): Promise<HttpResponse<any>> {
    console.log(request.params.equipmentId)
    const equipmentId = request.params.equipmentId;
    //descobrir como validar params
    const { errors, isValid} = ValidateFields.fieldsValidation({id:equipmentId});
    if(!isValid)return {
      statusCode: 400,
      data: 'Equipment Id is required'
    }

    try {
      const devices = await this.deviceManager.load(equipmentId);
      return {
        statusCode: 200,
        data: devices
      }
    }
    catch (error) {
      return serverError(error);
    }
  }
}