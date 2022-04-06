import { SectorListManager } from "@/data/services";
import { PrismaPostgressSectorRepository } from "@/infra/repositories/prisma-postgres/manager-sector";
import { Controller } from "@/presentation/contracts";
import { LoadSectorController } from "@/presentation/controllers/sector-load";
import { PostSectorController } from "@/presentation/controllers/sector-post";
import { UpdateSectorController } from "@/presentation/controllers/sector-update";

export const makeUpdateSectorController = () : Controller => {
  const repo = new PrismaPostgressSectorRepository();
  const updater = new SectorListManager(repo)
  return new UpdateSectorController(updater);
}

export const makePostSectorController = () : Controller => {
  const repo = new PrismaPostgressSectorRepository();
  const updater = new SectorListManager(repo)
  return new PostSectorController(updater);
}

export const makeLoadSectorController = (): Controller => {
  const repo = new PrismaPostgressSectorRepository();
  const loader = new SectorListManager(repo)
  return new LoadSectorController(loader)
}