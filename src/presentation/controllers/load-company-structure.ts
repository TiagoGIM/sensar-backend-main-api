import { CompanyStructureLoader } from "@src/domain/use-cases/company-structure-loader";
import { Controller, HttpResponse, serverError } from "@src/presentation/contracts";
import { CompanyStructureModel } from "@src/presentation/view-models";
/**
 * cada controlador sera  handler de uma rota
 * aqui é implementado o view model, que na api é um json.
 * o presentantio conversa com dominio
 */

export class LoadCompanyStructureController implements Controller {
  constructor(
    private readonly companyStructureLoader : CompanyStructureLoader
    ) { }

  async handle () : Promise<HttpResponse<CompanyStructureModel>> {
    try {
      const tree = await this.companyStructureLoader.load('id');
       return {
         statusCode : 200,
         data : tree
        }
    } catch (error : any) {
      return serverError(error);
    }
  };
}