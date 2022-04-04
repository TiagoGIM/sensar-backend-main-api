import { StatusCreateUpdate, Sector, UpdateSectorResponse } from "@/domain/entities";
import { SectorManager } from "@/domain/use-cases";
import { Controller, HttpResponse, serverError } from "../contracts";
import { Request } from 'express';
import { ValidateFields } from "@/infra/helpers/validate";
import { SectorDTO } from "../view-models/sector";
import { SectorMap } from "@/utils/sector-mapper";

export class UpdateSectorController implements Controller {
  constructor(readonly sectorManager: SectorManager) {
  }
  async handle(request?: Request): Promise<HttpResponse<UpdateSectorResponse>> {

    const sectordto: SectorDTO = SectorMap.toDTO(request);
    console.log(sectordto)
    const { errors, isValid } = ValidateFields.fieldsValidation(sectordto)

    if (!isValid) return {
      statusCode: 400, data: {
        statusUpdate: StatusCreateUpdate.FAIL,
        error: errors
      }
    }
    try {
      const sector: Sector = SectorMap.toDomain(sectordto);
      const statusUpdate = await this.sectorManager.update(sector);
      return {
        statusCode: 201,
        data: { statusUpdate: statusUpdate }
      }
    }
    catch (error: any) {
      return serverError(error)
    }
  }
}