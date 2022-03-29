import { EquipmentLoader } from "@/domain/use-cases";
import { Controller, HttpResponse, serverError } from "@/presentation/contracts";
import { EquipmentModel } from "@/presentation/view-models";
/**
 * cada controlador sera  handler de uma rota
 * aqui é implementado o view model, que na api é um json.
 * o presentantion conversa com dominio
 */

export class LoadEquipmentController implements Controller {
  constructor(
    private readonly equipmentLoader : EquipmentLoader
    ) { }

  async handle () : Promise<HttpResponse<EquipmentModel>> {
    try {
      //caso o equip fosse diferente do model, precisaria fzr um adpter pra mapear
      const equip = await this.equipmentLoader.load('id');
       return {
         statusCode : 200,
         data : equip
        }
    } catch (error : any) {
      return serverError(error);
    }
  };
}