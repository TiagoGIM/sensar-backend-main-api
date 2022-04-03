import { StatusCreateUpdate, AddSector, CreateNewSectorStatus} from "@/domain/entities";
import { SectorManager } from "@/domain/use-cases";
import { Controller, HttpResponse, serverError } from "../contracts";
import {Request} from 'express';

export class PostSectorController implements Controller {
  constructor(readonly sectorManager: SectorManager) {}

  async handle (request?: Request) : Promise<HttpResponse<CreateNewSectorStatus>> {
    const sector = request.body as unknown as AddSector;
    //TODO : @validateBody
    console.log("================= POST SECTOR =================")
    console.log(sector)
    try {
      const sectorCreated = await this.sectorManager.create(sector);
      if(sectorCreated.statusCreate === StatusCreateUpdate.FAIL){
        return {
          statusCode : 500,
          data : {
            id : undefined,
            statusCreate : StatusCreateUpdate.FAIL
          }
        }
      }
      return {
        statusCode : 201,
        data : {
          id : sectorCreated.id,
          statusCreate : StatusCreateUpdate.SUCESS
        }
      }
    }
    catch(error : any){
      return serverError(error)
    }
  }
}