import { CompanyId } from "@/domain/entities";
import { CompanyStructureLoader } from "@/domain/use-cases/company-structure-loader";
import { Controller, HttpResponse, serverError } from "@/presentation/contracts";
import { CompanyStructureModel } from "@/presentation/view-models";
import { Request } from "express"; //acomplamento criar um tipo que tenha request.  
/**
 * cada controlador sera  handler de uma rota
 * aqui é implementado o view model, que na api é um json.
 * o presentantion conversa com dominio
 */

export class LoadCompanyStructureController implements Controller {
  constructor(
    private readonly companyStructureLoader : CompanyStructureLoader
    ) { }
  async handle (request :Request) : Promise<HttpResponse<CompanyStructureModel>> {
    const companyId : CompanyId = request.params.id as unknown as CompanyId
    // validar paramsId 
    try {
      const companyTree = await this.companyStructureLoader.load(companyId);
       return {
         statusCode : 200,
         data : companyTree
        }
    } catch (error : any) {
      return serverError(error);
    }
  };
}