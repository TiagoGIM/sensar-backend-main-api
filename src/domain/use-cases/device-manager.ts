import { ResponseCreateUpdate, StatusCreateUpdate } from "@/utils/types/types";
import { AddDevice, Device } from "../entities/device";
import { EquipmentId } from "../entities/equipment";

export interface DeviceManager {
  create: (device: AddDevice) => Promise<ResponseCreateUpdate>
  update: (device: Device) => Promise<StatusCreateUpdate>
  load: (equipmentId: EquipmentId) => Promise<Device[]>
}