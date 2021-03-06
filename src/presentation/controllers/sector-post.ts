import { AddSector, CreateNewSectorStatus, Sector } from "@/domain/entities";
import { SectorManager } from "@/domain/use-cases";
import { Controller, HttpResponse, serverError } from "../contracts";
import { Request } from 'express';
import { ValidateFields } from "@/infra/helpers/validate";
import { addSectorDTO } from "../view-models/sector";
import { StatusCreateUpdate } from "@/utils/types/types";

export class PostSectorController implements Controller {
  constructor(readonly sectorManager: SectorManager) { }

  async handle(request?: Request): Promise<HttpResponse<CreateNewSectorStatus>> {
    console.log(request.body)
    const addSectorDTO: addSectorDTO = {
      companyId: request.body.companyId,
      name: request.body.name
    }
    //TODO : @validateBody
    const { errors, isValid } = ValidateFields.fieldsValidation(addSectorDTO)

    if (!isValid) return {
      statusCode: 400, data: {
        status: StatusCreateUpdate.FAIL,
        error: errors
      }
    }
    try {
      const sector: AddSector = {
        companyId: addSectorDTO.companyId,
        name: addSectorDTO.name
      }
      const sectorCreated = await this.sectorManager.create(sector);
      if (sectorCreated.status === StatusCreateUpdate.FAIL) {
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
          id: sectorCreated.id,
          status: StatusCreateUpdate.SUCESS
        }
      }
    }
    catch (error: any) {
      return serverError(error)
    }
  }
}