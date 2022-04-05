import { Router } from "express";
import { adaptRoute } from '@/main/adpters'
import { makePostMachineController } from "../factories/machine-manager.controller";

export default (router : Router): void => {
  router.post('/action/machine', adaptRoute(makePostMachineController()));
}