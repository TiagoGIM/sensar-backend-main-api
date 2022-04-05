
import { AddEquipment } from "@/domain/entities/equipment";
import { EquipmentManager } from "@/domain/use-cases/equipment-manager";
import { ValidateFields } from "@/infra/helpers/validate";
import { ResponseCreateUpdate, StatusCreateUpdate, Request } from "@/utils/types/types";
import { HttpResponse,Controller, serverError } from "../contracts";
import { AddEquipmentDTO } from "../view-models/equipment";

export class CreateEquipmentController implements Controller {
  constructor( readonly equipmentManager : EquipmentManager) {}
  async handle(request: Request): Promise<HttpResponse<ResponseCreateUpdate>> {
    const addEquipmentDTO: AddEquipmentDTO = {
      machineId: request.body.machineId,
      name: request.body.name
    }
    const { errors, isValid } = ValidateFields.fieldsValidation(addEquipmentDTO);
    if (!isValid) return {
        statusCode: 400,
        data: {
        statusCreate: StatusCreateUpdate.FAIL,
        error: errors
      }
    }
    try {
      const equipmentToAdd : AddEquipment = addEquipmentDTO;
      const equipmentCreated = await this.equipmentManager.create(equipmentToAdd);
      if( equipmentCreated.statusCreate === StatusCreateUpdate.FAIL) {
        return {
          statusCode: 500,
          data: {
            id: undefined,
            statusCreate: StatusCreateUpdate.FAIL
          }
        }
      }
      return {
        statusCode: 201,
        data: {
          id: equipmentCreated.id,
          statusCreate: StatusCreateUpdate.SUCESS
        }
      }
    } catch (error: any) {
      return serverError(error)
    }
  }

}