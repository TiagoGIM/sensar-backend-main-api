import { StatusCreateUpdate, AddSector, CreateNewSectorStatus, Sector } from "@/domain/entities";
import { SectorManager } from "@/domain/use-cases";
import { Controller, HttpResponse, serverError } from "../contracts";
import { Request } from 'express';
import { ValidateFields } from "@/infra/helpers/validate";
import { addSectorDTO } from "../view-models/sector";

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
        statusCreate: StatusCreateUpdate.FAIL,
        error: errors
      }
    }
    try {
      const sector: AddSector = {
        company_owner: addSectorDTO.companyId,
        name: addSectorDTO.name
      }
      const sectorCreated = await this.sectorManager.create(sector);
      if (sectorCreated.statusCreate === StatusCreateUpdate.FAIL) {
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
          id: sectorCreated.id,
          statusCreate: StatusCreateUpdate.SUCESS
        }
      }
    }
    catch (error: any) {
      return serverError(error)
    }
  }
}