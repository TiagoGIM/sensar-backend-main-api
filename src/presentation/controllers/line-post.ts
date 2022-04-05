import { AddLine } from "@/domain/entities/line";
import { LineManager } from "@/domain/use-cases/line-manager";
import { ValidateFields } from "@/infra/helpers/validate";
import { ResponseCreateUpdate, StatusCreateUpdate, Request } from "@/utils/types/types";
import { HttpResponse, Controller, serverError } from "../contracts";
import { AddLineDTO } from "../view-models/line";
export class CreateLineController implements Controller {
  constructor(readonly lineManager: LineManager) { }
  async handle(request: Request): Promise<HttpResponse<ResponseCreateUpdate>> {
    const addLineDTO: AddLineDTO = {
      sectorId: request.body.sectorId,
      name: request.body.name
    }
    const { errors, isValid } = ValidateFields.fieldsValidation(addLineDTO);
    if (!isValid) return {
      statusCode: 400,
      data: {
        status: StatusCreateUpdate.FAIL,
        error: errors
      }
    }
    try {
      const lineToAdd: AddLine = addLineDTO;
      const lineCreated = await this.lineManager.create(lineToAdd);
      if (lineCreated.status === StatusCreateUpdate.FAIL) {
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
          id: lineCreated.id,
          status: StatusCreateUpdate.SUCESS
        }
      }
    } catch (error: any) {
      return serverError(error)
    }
  }
}