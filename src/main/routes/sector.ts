import { Router } from "express";
import { adaptRoute } from '@/main/adpters'
import { makeUpdateSectorController } from '@/main/factories';

export default (router : Router): void => {
  router.put('/action/sector/:sectorId', adaptRoute(makeUpdateSectorController()));
}