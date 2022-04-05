import { LineManagerImp } from "@/data/services/lines";
import { PrismaPostgressLineRepository } from "@/infra/repositories/prisma-postgres/manager-line";
import { Controller } from "@/presentation/contracts";
import { CreateLineController } from "@/presentation/controllers/line-post";

/*
export const makeUpdateSectorController = () : Controller => {
  const repo = new PrismaPostgressSectorRepository();
  const updater = new SectorListManager(repo)
  return new UpdateSectorController(updater);
}
*/
export const makePostLineController = () : Controller => {
  const repo = new PrismaPostgressLineRepository();
  const createrService = new LineManagerImp(repo)
  return new CreateLineController(createrService);
}