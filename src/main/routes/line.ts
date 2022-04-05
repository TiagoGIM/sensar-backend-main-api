import { Router } from "express";
import { adaptRoute } from '@/main/adpters'
import { makePostLineController } from "../factories/line-manager-controller";

export default (router : Router): void => {
  router.post('/action/line', adaptRoute(makePostLineController()));
}