import { AddDevice, Device, DeviceUnit } from "@/domain/entities/device";
import { EquipmentId } from "@/domain/entities/equipment";
import { DeviceToUpdate } from "../models/interfaces";

export interface ManagerDeviceRepository{
  devicesByEquipmentId(equipmentId: EquipmentId): Promise<Device[]>;
  create(device: AddDevice): Promise<DeviceUnit>;
  save(device: DeviceToUpdate): Promise<DeviceToUpdate>;
}