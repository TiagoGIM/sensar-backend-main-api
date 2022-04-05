import { AddLine } from "@/domain/entities/line";
import { LineManager } from "@/domain/use-cases/line-manager";
import { ResponseCreateUpdate, StatusCreateUpdate } from "@/utils/types/types";
import { LineMenageRepository } from "../contracts/manager-line.repository";

export class LineManagerImp implements LineManager {
  constructor(private readonly managerLineRepository : LineMenageRepository) {}
  async create (line: AddLine) : Promise<ResponseCreateUpdate> {
    const resultOperation = await this.managerLineRepository.create(line);
    if ((await resultOperation).id) {
      return { id :resultOperation.id,  statusCreate : StatusCreateUpdate.SUCESS}
    }
    return { id :'',  statusCreate : StatusCreateUpdate.FAIL };
  }
}
// fazer tratamento de erro;