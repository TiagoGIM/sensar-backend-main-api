
import { AddMachine } from "@/domain/entities/machine";
import { MachineManager } from "@/domain/use-cases/machine-manager";
import { ValidateFields } from "@/infra/helpers/validate";
import { ResponseCreateUpdate, StatusCreateUpdate, Request } from "@/utils/types/types";
import { HttpResponse,Controller, serverError } from "../contracts";
import { AddMachineDTO } from "../view-models/machine";

export class CreateMachineController implements Controller {
  constructor( readonly machineManager : MachineManager) {}
  async handle(request: Request): Promise<HttpResponse<ResponseCreateUpdate>> {
    const addmachineDTO: AddMachineDTO = {
      lineId: request.body.lineId,
      name: request.body.name
    }
    const { errors, isValid } = ValidateFields.fieldsValidation(addmachineDTO);
    if (!isValid) return {
        statusCode: 400,
        data: {
        statusCreate: StatusCreateUpdate.FAIL,
        error: errors
      }
    }
    try {
      const machineToAdd : AddMachine = addmachineDTO;
      const machineCreated = await this.machineManager.create(machineToAdd);
      if( machineCreated.statusCreate === StatusCreateUpdate.FAIL) {
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
          id: machineCreated.id,
          statusCreate: StatusCreateUpdate.SUCESS
        }
      }
    } catch (error: any) {
      return serverError(error)
    }
  }

}