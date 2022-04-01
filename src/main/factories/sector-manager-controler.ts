import { SectorListManager } from "@/data/services";
import { FakeSectorRepository } from "@/infra/repositories/fake-repository/fake-manager-sector";
import { Controller } from "@/presentation/contracts";
import { UpdateSectorController } from "@/presentation/controllers/sector-update";

export const makeUpdateSectorController = () : Controller => {
  const repo = new FakeSectorRepository();
  const updater = new SectorListManager(repo)
  return new UpdateSectorController(updater);
}