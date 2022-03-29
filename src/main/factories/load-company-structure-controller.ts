
import { CompanyStructureLoaderService } from "@src/application/services/company-structure";
import { FakeCompanyStructureRepository } from "@src/infra/repositories/fake-load-company-structure";
import { Controller } from "@src/presentation/contracts";
import { LoadCompanyStructureController } from "@src/presentation/controllers";

export const makeLoadCompanyStructureController = () : Controller => {
  const repo = new FakeCompanyStructureRepository();
  const loader = new CompanyStructureLoaderService(repo)
  return new LoadCompanyStructureController(loader)
}
