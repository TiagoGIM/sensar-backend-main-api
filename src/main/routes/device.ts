import { Router } from "express";
import { adaptRoute } from "../adpters";
import {
  makeLoadEquipmentsDeviceController,
  makePostDeviceController,
  makeUpdateDeviceController
} from "../factories/device-manager.controler";

export default (router: Router): void => {
  router.get('/query/device/:equipmentId', adaptRoute(makeLoadEquipmentsDeviceController()));
  router.post('/action/device', adaptRoute(makePostDeviceController()));
  router.put('/action/device', adaptRoute(makeUpdateDeviceController()));
}