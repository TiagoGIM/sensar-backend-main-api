import { AddMachine } from "@/domain/entities/machine";
import { MachineManager } from "@/domain/use-cases/machine-manager";

import { ResponseCreateUpdate, StatusCreateUpdate } from "@/utils/types/types";
import { MachineMenageRepository } from "../contracts/manager-machine.repository";

export class MachineManagerImp implements MachineManager {
  constructor(private readonly managerMachineRepository : MachineMenageRepository) {}
  async create (machine: AddMachine) : Promise<ResponseCreateUpdate> {
    const resultOperation = await this.managerMachineRepository.create(machine);
    if ((await resultOperation).id) {
      return { id :resultOperation.id,  status : StatusCreateUpdate.SUCESS}
    }
    return { id :'',  status : StatusCreateUpdate.FAIL };
  }
}
// fazer tratamento de erro;