import { CreateNewCompanyService } from "@/data/services/company-create";
import { CompanyStructureLoaderService } from "@/data/services/company-structure";
import { PrismaPostgressCreateCompanyRepository } from "@/infra/repositories/prisma-postgres/create-company";
import { CompanyStructureRepositoryImp } from "@/infra/repositories/prisma-postgres/load-company-structure";
import { Controller } from "@/presentation/contracts";
import { LoadCompanyStructureController } from "@/presentation/controllers";
import { CreateCompanyController } from "@/presentation/controllers/create-company";

export const makeLoadCompanyStructureController = () : Controller => {
  const repo = new CompanyStructureRepositoryImp();
  const loader = new CompanyStructureLoaderService(repo);
  return new LoadCompanyStructureController(loader);
}

export const makeCreateCompanyController = () : Controller => {
  const repo = new PrismaPostgressCreateCompanyRepository();
  const creater = new CreateNewCompanyService(repo);
  return new CreateCompanyController(creater);
}