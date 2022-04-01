import { CompanyStructureLoaderService } from "@/data/services/company-structure";
import { FakeCompanyStructureRepository } from "@/infra/repositories/fake-repository/fake-load-company-structure";
import { Controller } from "@/presentation/contracts";
import { LoadCompanyStructureController } from "@/presentation/controllers";

export const makeLoadCompanyStructureController = () : Controller => {
  const repo = new FakeCompanyStructureRepository();
  const loader = new CompanyStructureLoaderService(repo);
  return new LoadCompanyStructureController(loader);
}
