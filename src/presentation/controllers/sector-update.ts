import { Sector } from "@/application/models";
import { StatusCreateUpdate } from "@/domain/entities";
import { SectorManager } from "@/domain/use-cases";
import { Controller, HttpResponse, serverError } from "../contracts";

export class UpdateSectorController implements Controller {
  constructor(readonly sectorManger: SectorManager) {}
  async handle (request?: Request) : Promise<HttpResponse<StatusCreateUpdate>> {
    console.log(request.body);
    // use uma interface com a entidade do dominio
    const sector = request.body as unknown as Sector;
    try {
      const statusUpdate = await this.sectorManger.update(sector);
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