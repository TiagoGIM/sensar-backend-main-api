import { MachineManagerImp } from "@/data/services/machine";
import { PrismaPostgressMachineRepository } from "@/infra/repositories/prisma-postgres/manager-machine";
import { Controller } from "@/presentation/contracts";
import { CreateMachineController } from "@/presentation/controllers/machine-post";

export const makePostMachineController = () : Controller => {
  const repo = new PrismaPostgressMachineRepository();
  const createrService = new MachineManagerImp(repo)
  return new CreateMachineController(createrService);
}