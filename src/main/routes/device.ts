import { Router } from "express";
import { adaptRoute } from "../adpters";
import { makeLoadDeviceData } from "../factories/device-data.controler";
import { makeLoadDeviceFree } from "../factories/device-free.controller";
import {
  makeLoadEquipmentsDeviceController,
  makePostDeviceController,
  makeUpdateDeviceController
} from "../factories/device-manager.controler";

export default (router: Router): void => {
  router.post('/action/device', adaptRoute(makePostDeviceController()));
  router.put('/action/device', adaptRoute(makeUpdateDeviceController()));
  router.get('/query/device/:equipmentId', adaptRoute(makeLoadEquipmentsDeviceController()));
  router.get('/query/device/data/:macAddress', adaptRoute(makeLoadDeviceData()));
  router.get('/query/device-free',adaptRoute(makeLoadDeviceFree()));
}