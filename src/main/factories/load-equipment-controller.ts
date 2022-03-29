import { EquipmentLoaderService } from "@/application/services";
import { FakeEquipmentRepository } from "@/infra/repositories/fake-load-equipment";
import { Controller } from "@/presentation/contracts";
import { LoadEquipmentController } from "@/presentation/controllers";

export const makeLoadEquipmentController = () : Controller => {
  const repo = new FakeEquipmentRepository();
  const loader = new EquipmentLoaderService(repo)
  return new LoadEquipmentController(loader)
}
