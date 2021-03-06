import { Router } from "express";
import { adaptRoute } from '@/main/adpters'
import { makeLoadSectorController, makePostSectorController, makeUpdateSectorController } from '@/main/factories';
import { SectorDTO } from "@/presentation/view-models/sector";

export default (router : Router): void => {
  router.put<unknown, unknown, SectorDTO>('/action/sector/', adaptRoute(makeUpdateSectorController()));
  router.post('/action/sector/', adaptRoute(makePostSectorController()));
  router.get('/query/sector/:companyId', adaptRoute(makeLoadSectorController()));
}