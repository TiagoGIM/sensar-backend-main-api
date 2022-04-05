import { EquipmentManagerImp } from "@/data/services";
import { EquipmentRepositoryImp } from "@/infra/repositories/prisma-postgres/manager-equipment";
import { Controller } from "@/presentation/contracts";
import { CreateEquipmentController } from "@/presentation/controllers/equipment-post";

export const makePostEquipmentController = () : Controller => {
  const repo = new EquipmentRepositoryImp();
  const createrService = new EquipmentManagerImp(repo)
  return new CreateEquipmentController(createrService);
}

export const makeLoadEquipmentController = () : Controller => {
  const repo = new EquipmentRepositoryImp();
  const createrService = new EquipmentManagerImp(repo)
  return new CreateEquipmentController(createrService);
}

export const makeUpdateEquipmentController = () : Controller => {
  const repo = new EquipmentRepositoryImp();
  const createrService = new EquipmentManagerImp(repo)
  return new CreateEquipmentController(createrService);
}