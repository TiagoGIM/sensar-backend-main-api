import { Router } from "express";
import { adaptRoute } from '@/main/adpters'
import { makePostSectorController, makeUpdateSectorController } from '@/main/factories';

export default (router : Router): void => {
  router.put('/action/sector/', adaptRoute(makeUpdateSectorController()));
  router.post('/action/sector/', adaptRoute(makePostSectorController()));
}