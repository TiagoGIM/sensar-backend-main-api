import { StatusCreateUpdate,Sector} from "@/domain/entities";
import { SectorManager } from "@/domain/use-cases";
import { Controller, HttpResponse, serverError } from "../contracts";
import {Request} from 'express';
import validate from 'uuid-validate'
export class UpdateSectorController implements Controller {
  constructor(readonly sectorManager: SectorManager) {
  }
  async handle (request?: Request) : Promise<HttpResponse<StatusCreateUpdate>> {
    const sector = request.body as unknown as Sector;
    //TODO : @validateBody refactor
    if ( !validate(sector.id) || !sector.name) return { statusCode: 400 , data : StatusCreateUpdate.FAIL}
    try {
      const statusUpdate = await this.sectorManager.update(sector);
      return {
        statusCode :201,
        data : statusUpdate
      }
    }
    catch(error : any){
      return serverError(error)
    }
  }
}