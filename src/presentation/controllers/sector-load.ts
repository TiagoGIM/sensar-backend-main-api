
import { SectorManager } from "@/domain/use-cases";
import { Controller } from "../contracts/controller";
import { HttpResponse, serverError } from "../contracts/http";
import { Request } from "@/utils/types/types";
import { ValidateFields } from "@/infra/helpers/validate";

export class LoadSectorController implements Controller {

  constructor(readonly sectorManager: SectorManager) { }

  async handle(request?: Request): Promise<HttpResponse<any>> {
    console.log(request.params)
    const companyId = request.params.companyId;
    const { errors, isValid } = ValidateFields.fieldsValidation({ id: companyId });
    if (!isValid) return {
      statusCode: 400,
      data: 'companyId is required'
    }
    try {
      const sectors = await this.sectorManager.load(companyId);
      return {
        statusCode: 200,
        data: sectors.map(sector => ({name: sector.name, id: sector.id}))
      }
    }
    catch (error) {
      return serverError(error);
    }
  }

}